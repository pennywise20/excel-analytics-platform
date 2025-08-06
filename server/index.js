require('dotenv').config(); // Always first!

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // <--- Import the routes

const app = express();
app.use(express.json());

// Use the routes
app.use('/api/auth', authRoutes); // <--- Mount it here

// Connect to MongoDB
console.log("🧪 MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 Server is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🌐 Server started on port ${PORT}`));
