const productsModel = require('../models/products.model');

const findAll = async () => {
  const productsResult = await productsModel.findAll();
  return productsResult;
};

const findById = async (id) => {
  const resultId = await productsModel.findById(id);
  return resultId;
};

module.exports = { findAll, findById };