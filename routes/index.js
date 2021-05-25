// Main / root router, containing all subroutes.

const express = require('express');
const router = express.Router();

// Import subroutes
const usersRoutes = require('./users');
// ... and mount them
router.use('/users', usersRoutes);

module.exports = router;
