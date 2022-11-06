const salesModel = require('../models/sales.model');
// 1 ===
const findAllSales = async () => {
  const productsResult = await salesModel.findAllSales();
  return productsResult;
};

const findByIdSales = async (id) => {
  const resultId = await salesModel.findByIdSales(id);
  return resultId;
};
// ===
// 3
const createNewSales = async (name) => {
  const id = await salesModel.createNewSales(name);
  const result = { id, name };
  return result;
};

module.exports = { findAllSales, findByIdSales, createNewSales };