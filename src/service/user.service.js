const { getAllArrayDB } = require('../repository/user.repository');

async function getAllArray() {
  const data = await getAllArrayDB();
  return data;
}

module.exports = { getAllArray };
