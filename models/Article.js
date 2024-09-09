const pool = require('../config/db');

class Article {
  static async createArticle(title, content, discipline, authorId, imageUrl) {
    const result = await pool.query(
      'INSERT INTO articles (title, content, discipline, author_id, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, content, discipline, authorId, imageUrl]
    );
    return result.rows[0];
  }

  static async findByDiscipline(discipline) {
    const result = await pool.query('SELECT * FROM articles WHERE discipline = $1', [discipline]);
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query('SELECT * FROM articles WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query('SELECT * FROM articles');
    return result.rows;
  }
}

module.exports = Article;
