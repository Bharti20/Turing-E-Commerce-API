const express = require('express')
const Router = express.Router()

const departmRoute = require('./departmentsRoutes')
const categoriesRoute = require('./categoriesRoute')
const attributeRoute = require('./attributeRoutes')
const productRoute = require('./products')
const customerRoute = require('./customers')

Router.use('/', departmRoute)
Router.use('/', categoriesRoute)
Router.use('/', attributeRoute)
Router.use('/', productRoute)
Router.use('/', customerRoute)

module.exports = Router