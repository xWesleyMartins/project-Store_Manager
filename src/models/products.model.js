const connection = require('./connection');

const findAll = async () => {
  const [productResult] = await connection
    .execute('SELECT * FROM products');
  return productResult;
};

const findById = async (id) => {
  const [[productResult]] = await connection
  .execute('SELECT * FROM products WHERE id = ?', [id]);
  return productResult;
};

const createNewProducts = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO products (name) VALUE (?)', [name]);
  return insertId;
};

const updateProduct = async (name, id) => {
  const [updateResult] = await connection
    .execute('UPDATE products SET name = ? WHERE id = ?', [name, id]);
  return updateResult;
};

const deleteProduct = async (id) => {
  const deleteById = await connection
    .execute('DELETE FROM products WHERE id = ?', [id]);
  return deleteById;
};

const findBySearch = async (q) => {
  const [resultSearch] = await connection
    .execute(`SELECT * FROM products WHERE name LIKE '%${q}%'`);
  return resultSearch;
};

module.exports = {
  findById,
  findAll,
  createNewProducts,
  updateProduct,
  deleteProduct,
  findBySearch,
};