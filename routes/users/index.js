// Routes for the "/users" endpoint.

const express = require('express');
const router = express.Router();

// Import controller methods
const { getAllUsers, createUser } = require('../../controllers/users');

// Mount controller methods to routes
router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;
