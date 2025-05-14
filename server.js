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

// Connect to DB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/root'));
app.use('/states', require('./routes/states'));

// Root endpoint returns HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404 fallback - Moved to the end!
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// DB ready = start server

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

