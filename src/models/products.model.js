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

const createNewProducts = async (name) => {
  const [{ insertId }] = await connection.execute('INSERT INTO products (name) VALUE (?)', [name]);
  return insertId;
};

module.exports = { findById, findAll, createNewProducts };