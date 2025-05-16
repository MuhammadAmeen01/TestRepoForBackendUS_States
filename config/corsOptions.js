const whitelist = [
  'https://dazzling-snickerdoodle-777101.netlify.app',
  'http://127.0.0.1:5500',
  'http://localhost:3500'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.some(allowed => origin.startsWith(allowed))) {
      callback(null, true);
    } else {
      console.log(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies/credentials if needed
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
