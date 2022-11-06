const camelize = require('camelize');
const connection = require('./connection');

const findAllSales = async () => {
  const [salesResult] = await connection.execute(
    `SELECT sp.sale_id, s.date,
  sp.product_id, sp.quantity 
  FROM sales AS s INNER JOIN sales_products AS sp ON sp.sale_id = s.id`,
  );

  return camelize(salesResult);
};

const findByIdSales = async (id) => {
  const [salesResult] = await connection.execute(
    `SELECT sale_id, s.date, sp.product_id, sp.quantity
    FROM sales AS s
    INNER JOIN sales_products AS sp
    ON sp.sale_id = s.id 
    WHERE sp.sale_id = ?
    ORDER BY sale_id, sp.product_id`, [id],
  );
  return camelize(salesResult);
};

const createNewSales = async (name) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (name) VALUE (?)', [name]);
  return insertId;
};

const deleteSales = async (id) => {
  const deleteById = await connection
    .execute('DELETE FROM sales WHERE id = ?', [id]);
  return deleteById;
};

module.exports = { findAllSales, findByIdSales, createNewSales, deleteSales };