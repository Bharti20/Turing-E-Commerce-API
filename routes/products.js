const express = require('express')
const Router = express.Router()
const productsController = require('../controller/products')

Router.get('/products', productsController.selectProducts)
Router.get('/products/:search', productsController.searchProduct)
Router.get('/products/product_id/:id' ,productsController.productById)
Router.get('/products/inCategory/:category_id', productsController.getProductOfCategory)

module.exports = Router
