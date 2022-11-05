const productsService = require('../services/products.services');

const findAll = async (req, res) => { 
  const filter = req.query ? req.query.filter : null; // ternary para verificar se existe algo dentro da query, caso nao resultado é null
  const productsModel = await productsService.findAll(filter);
  res.status(200).json(productsModel);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const resultId = await productsService.findById(Number(id));
  if (!resultId) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(200).json(resultId);
};

const createNewProducts = async (req, res) => {
  const { name } = req.body;
  if (!name) {
     res.status(400).json({ message: '"name" is required' });
  } else if (name.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  } 
  const result = await productsService.createNewProducts(name);
  return res.status(201).json(result);
};

module.exports = { findAll, findById, createNewProducts };