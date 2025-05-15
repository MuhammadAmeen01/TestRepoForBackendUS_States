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
console.log('Registering / route...');
app.use('/', require('./routes/root'));
console.log('Registering /states route...');
app.use('/states', require('./routes/states'));

// 404 for unmatched routes
app.all('*', (req, res) => {
    if (req.method === 'GET') {
      res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    } else {
      res.status(404).json({ message: '404 Not Found' });
    }
  });

// ✅ START SERVER only when DB is connected
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
