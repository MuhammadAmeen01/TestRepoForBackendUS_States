require('dotenv').config(); // MUST be very first thing
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Custom middleware logger
app.use(logger);

// ✅ Manual fallback CORS middleware — add this just before corsOptions
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // OR restrict to a specific origin if needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

// ✅ Use only one of these:
// If you want to allow *any* origin (for testing/public use):
app.use(cors());

// If you want to use your whitelist (production-ready):
//app.use(cors(corsOptions));

// Built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for json
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/states', require('./routes/states'));
app.use('/users', require('./routes/root'));

// 404 handler
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ "error": "404 Not Found" });
  } else {
    res.type('txt').send("404 Not Found");
  }
});

// Custom error handler
app.use(errorHandler);

// Start server once MongoDB connection is open
// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });
mongoose.connection.once('open', () => {
  console.log('✅ Inside mongoose.connection.once');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
