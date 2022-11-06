const salesService = require('../services/sales.services');

const findAllSales = async (req, res) => { 
  const filter = req.query ? req.query.filter : null; // ternary para verificar se existe algo dentro da query, caso nao resultado é null
  const salesModel = await salesService.findAllSales(filter);
  res.status(200).json(salesModel);
};

const findByIdSales = async (req, res) => {
  const { id } = req.params;
  const resultId = await salesService.findByIdSales(Number(id));
  if (!resultId.length) {
    return res.status(404).json({
      message: 'Sale not found',
    });
  }
  if (!id) {
    return res.status(200).json(resultId);
  }
  const saleId = resultId.map(({ date, productId, quantity }) => ({ date, productId, quantity }));
    return res.status(200).json(saleId); 
};

const createNewSales = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  } 
  const result = await salesService.createNewSales(name);
  return res.status(201).json(result);
};
const deleteSales = async (req, res) => {
  const { id } = req.params;
  const resultId = await salesService.findByIdSales(Number(id));
  if (!resultId.length) {
    return res.status(404).json({
      message: 'Sale not found',
    });
  }
  const delByIdResult = await salesService.deleteSales(id);
  return res.status(204).json(delByIdResult);
};

module.exports = { findAllSales, findByIdSales, createNewSales, deleteSales };