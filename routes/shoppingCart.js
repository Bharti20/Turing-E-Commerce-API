const express = require('express')
const Router = express.Router()
const shoppingCartController = require('../controller/shoppingCart')

Router.get('/shoppingCart/genrateUniqueId', shoppingCartController.genrateUniqueId)
Router.post('/shoppingCart/add', shoppingCartController.addProduct)
Router.get('/shoppingCart/:cart_id', shoppingCartController.productByCartId)
Router.put('/shoppingCart/update/:item_id', shoppingCartController.updateByItemId)
Router.delete('/shoppingCart/empty/:cart_id', shoppingCartController.deleteByCartId)
Router.get('/shoppingCart/moveToCart/:item_id', shoppingCartController.moveToCart)
Router.get('/shoppingCart/totalAmount/:cart_id', shoppingCartController.productAmout)

module.exports = Router