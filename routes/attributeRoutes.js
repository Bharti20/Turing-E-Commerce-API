const express = require('express')
const Router = express.Router()
const attributeController = require('../controller/attributes')

Router.get('/getAttributeList', attributeController.attributesList)
Router.get('/attributeById/:id', attributeController.attributeById)
Router.get('/getAtributeValues/:attribute_id', attributeController.getValues)

module.exports = Router