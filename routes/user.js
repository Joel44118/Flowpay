const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const userController = new UserController();

router.get('/', async (req, res) => {
  const users = await userController.getUsers();
  res.json(users);
});

module.exports = router;