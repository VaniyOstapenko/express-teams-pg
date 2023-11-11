const pool = require('../db');

async function getAllArrayDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM teams';

  const result = (await client.query(sql)).rows;

  return result;
}

module.exports = { getAllArrayDB };
