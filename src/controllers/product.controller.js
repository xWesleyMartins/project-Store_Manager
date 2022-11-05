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

module.exports = { findAll, findById };