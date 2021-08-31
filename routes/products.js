const express = require('express')
const Router = express.Router()
const productsController = require('../controller/products')

Router.get('/products', productsController.selectProducts)
Router.get('/products/:search', productsController.searchProduct)
Router.get('/products/product_id/:id' ,productsController.productById)
Router.get('/products/inCategory/:category_id', productsController.getProductOfCategory)
Router.get('/products/inDepartment/:department_id',productsController.productsOnDepartment)
Router.get('/product/:product_id/details', productsController.productDetails)
Router.get('/product/:product_id/location', productsController.productLocation)
Router.get('/products/review', productsController.productReview)

module.exports = Router
