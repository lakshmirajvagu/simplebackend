const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();
app.use(express.json()); 

const itemRoutes = require('./Routes/routes'); // ✅ Ensure correct path
app.use('/api', itemRoutes); // ✅ Prefix all routes with "/api"

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
