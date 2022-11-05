const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router.get('/', productController.findAll);
router.get('/:id', productController.findById);
router.post('/', productController.createNewProducts);

module.exports = router;
