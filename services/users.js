// Service: uses the Users model to talk to DB for the "/users" endpoint.
// Keeps controller logic clean.

const User = require('../models/User');

exports.getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

exports.createUser = async ({ firstName, lastName }) => {
  const [user] = await User.upsert({ firstName, lastName });
  return user;
};
