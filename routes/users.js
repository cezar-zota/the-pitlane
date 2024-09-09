// users.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../middlewares/authMiddleware');

// Route: Display registration form
router.get('/register', userController.showRegisterForm);

// Route: Handle user registration
router.post('/register', userController.registerUser);

// Route: Display login form
router.get('/login', userController.showLoginForm);

// Route: Handle user login
router.post('/login', userController.loginUser);

// Route: Handle user logout
router.get('/logout', userController.logoutUser);

// Route: Display user account page (only accessible if authenticated)
router.get('/account', ensureAuthenticated, userController.showAccountPage);

module.exports = router;
