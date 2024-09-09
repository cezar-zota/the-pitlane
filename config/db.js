const { Pool } = require('pg');

// PostgreSQL Connection Pool
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'the_pitlane',
  password: 'your_db_password',
  port: 5432,
});

module.exports = pool;
