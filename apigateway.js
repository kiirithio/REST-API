const express = require('express')

const { createProduct, getProductByid, stockCheck } = require('./orderservice')

const router = express.Router();

router.post('/createproduct', createProduct);
router.get('/stockCheck', stockCheck);
router.get('/:id', getProductByid);

module.exports = router
