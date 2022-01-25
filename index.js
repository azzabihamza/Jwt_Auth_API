const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoutes = require('./routes/auth');


dotenv.config();

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECT, 
    () => {console.log('Connected to MongoDB')}
);

// Middleware
app.use(express.json());
//route middleware
app.use('/api/user', authRoutes);

app.listen(3000, () => {console.log('Server is running on port 3000')});