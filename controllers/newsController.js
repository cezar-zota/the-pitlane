const Article = require('../models/Article');
const Comment = require('../models/Comment');

exports.getNewsByDiscipline = async (req, res) => {
  try {
    const articles = await Article.findByDiscipline(req.params.discipline);
    res.render('pages/news', { articles });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    const comments = await Comment.findByArticleId(req.params.id);
    res.render('pages/article', { article, comments });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
