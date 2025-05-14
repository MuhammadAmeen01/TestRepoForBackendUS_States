require('dotenv').config(); // MUST be very first thing
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

const PORT = process.env.PORT || 3500;

connectDB(); // Connect to MongoDB

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Route handlers
app.use('/', require('./routes/root'));
app.use('/states', require('./routes/states'));

// Root endpoint - returns index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404 for unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// ✅ START SERVER only when DB is connected
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
