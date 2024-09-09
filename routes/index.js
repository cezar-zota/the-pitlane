// index.js

const express = require('express');
const router = express.Router();

// Import route files
const newsRoutes = require('./news');
const userRoutes = require('./users');
const commentRoutes = require('./comments');

// Base route for news (e.g., /news/formula1)
router.use('/news', newsRoutes);

// Base route for user authentication and account management (e.g., /users/login)
router.use('/users', userRoutes);

// Base route for comments (e.g., /comments)
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;
