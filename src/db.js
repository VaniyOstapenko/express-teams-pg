const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'football_team',
  password: 'Vaniy122994',
  port: '5432',
});

module.exports = pool;
