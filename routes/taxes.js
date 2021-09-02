const express = require('express')
const Router = express.Router() 
const taxController = require('../controller/tax')

Router.get('/taxes', taxController.taxes)
Router.get('/tax/:tax_id', taxController.taxById)

module.exports = Router