const pool = require('../config/db');

class Comment {
  static async createComment(content, articleId, userId) {
    const result = await pool.query(
      'INSERT INTO comments (content, article_id, user_id) VALUES ($1, $2, $3) RETURNING *',
      [content, articleId, userId]
    );
    return result.rows[0];
  }

  static async findByArticleId(articleId) {
    const result = await pool.query('SELECT * FROM comments WHERE article_id = $1', [articleId]);
    return result.rows;
  }

  static async deleteById(commentId) {
    await pool.query('DELETE FROM comments WHERE id = $1', [commentId]);
  }
}

module.exports = Comment;
