// Controller: handles requests for the "/users" endpoint.

const usersService = require('../services/users');

/**
 * Get all users.
 */
exports.getAllUsers = async (req, res, next) => {
  const users = await usersService.getAllUsers();
  res.status(200).json({ users });
};

/**
 * Create a user.
 */
exports.createUser = async (req, res, next) => {
  const { firstName, lastName } = req.body;

  const user = await usersService.createUser({ firstName, lastName });
  res.status(201).json({ user });
};
