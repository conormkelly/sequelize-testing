// Configures the Express application
const express = require('express');
const app = express();

// Routes
const apiRoutes = require('./routes');

// Enable JSON request body parsing middleware
app.use(express.json());

// Mount the API routes
app.use('/api', apiRoutes);

module.exports = app;
