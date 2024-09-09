// news.js

const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Route: View all news articles by discipline (e.g., Formula 1, WEC, etc.)
router.get('/:discipline', newsController.getNewsByDiscipline);

// Route: View a single article by its ID
router.get('/article/:id', newsController.getArticleById);

module.exports = router;
