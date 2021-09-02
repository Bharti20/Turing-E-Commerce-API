const express = require('express')
const Router = express.Router()
const shippingController = require('../controller/shipping')

Router.get('/shipping/regions', shippingController.shippingsRegions)
Router.get('/shipping/regions/:shipping_region_id', shippingController.regionsById)


module.exports = Router