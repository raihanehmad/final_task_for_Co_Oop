const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController.js');
const { routes } = require('../index.js');
// query all stored users
router.get('/load', UserController.get);
router.get('/load', UserController.get_data);
// store a blog
router.post('/user', UserController.create);

// Update a user by id
router.put('/user/:id', UserController.update);

// query a user through given id
router.get('/user/:id', UserController.getUsingId);

// delete a user by given id
router.delete('/user/:id', UserController.destroy);


module.exports = router;