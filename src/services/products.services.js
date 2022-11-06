const productsModel = require('../models/products.model');
// 1 ===
const findAll = async () => {
  const productsResult = await productsModel.findAll();
  return productsResult;
};

const findById = async (id) => {
  const resultId = await productsModel.findById(id);
  return resultId;
};
// ===
// 3
const createNewProducts = async (name) => {
  const id = await productsModel.createNewProducts(name);
  const result = { id, name };
  return result;
};

const updateProduct = async (name, id) => {
  await productsModel.updateProduct(name, id);
  const result = await productsModel.findById(id);
  return result;
};

const deleteProduct = async (id) => {
  await productsModel.deleteProduct(id);
  const result = await productsModel.findById(id);
  return result;
};

module.exports = { findAll, findById, createNewProducts, updateProduct, deleteProduct };