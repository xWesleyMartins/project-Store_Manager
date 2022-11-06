const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();

router.get('/', productController.findAll);
router.get('/:id', productController.findById);
router.put('/:id', productController.updateProduct);
router.post('/', productController.createNewProducts);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
