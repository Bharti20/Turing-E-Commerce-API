const express = require('express')
const Router = express.Router()
const attributeController = require('../controller/attributes')

Router.get('/attributes', attributeController.attributesList)
Router.get('/attributes/:attribute_id', attributeController.attributeById)
Router.get('/attributes/values/:attribute_id', attributeController.getValues)
Router.get('/attributes/inProduct/:id', attributeController.attributeWithProductId)

module.exports = Router