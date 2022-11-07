const { object } = require('joi');
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
const deleteSales = async (id) => {
  await salesModel.deleteSales(id);
  const result = await salesModel.findByIdSales(id);
  return result;
};
const updateSales = async (body, id) => {
  const saleValidation = await salesModel.findByIdSales(id);
  if (!saleValidation.length) return { message: 'Sale not found' };
  const result = await salesModel.updateSales(body, id);
  const verifica = result.some(({ info }) => info.includes('Rows matched: 0'));
  console.log(verifica);
  if (!verifica) return { saleId: id, itemsUpdated: body };
  return { message: 'Product not found' };
};
module.exports = { findAllSales, findByIdSales, createNewSales, deleteSales, updateSales };