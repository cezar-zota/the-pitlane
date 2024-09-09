// comments.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { ensureAuthenticated } = require('../middlewares/authMiddleware');

// Route: Handle posting a new comment (authenticated users only)
router.post('/', ensureAuthenticated, commentController.createComment);

// Route: Handle deleting a comment (authenticated users only)
router.delete('/:id', ensureAuthenticated, commentController.deleteComment);

module.exports = router;
