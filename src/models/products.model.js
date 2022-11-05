const connection = require('./connection');

const findAll = async () => {
  const [productResult] = await connection.execute('SELECT * FROM products');
  return productResult;
};

const findById = async (id) => {
  const [[productResult]] = await connection
  .execute('SELECT * FROM products WHERE id = ?', [id]);
  return productResult;
};

module.exports = { findById, findAll };