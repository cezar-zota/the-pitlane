const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  try {
    await Comment.createComment(req.body.content, req.body.article_id, req.user.id);
    res.redirect(`/news/${req.body.article_id}`);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.deleteById(req.params.id);
    res.redirect('back');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
