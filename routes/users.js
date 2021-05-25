// Routes for the "/users" endpoint.

const express = require('express');
const router = express.Router();

// Import controller methods
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

// Mount controller methods to routes
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
