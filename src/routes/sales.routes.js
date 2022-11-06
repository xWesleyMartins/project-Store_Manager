const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const router = Router();

router.get('/', salesController.findAllSales);
router.get('/:id', salesController.findByIdSales);
router.post('/', salesController.createNewSales);
router.delete('/:id', salesController.deleteSales);

module.exports = router;