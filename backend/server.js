const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
// CORS configuration to allow requests from frontend
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port, update if different
  credentials: true, // Allow sending cookies
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

// Basic route for testing server
app.get('/', (req, res) => {
  res.send('Architectural Portfolio API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
