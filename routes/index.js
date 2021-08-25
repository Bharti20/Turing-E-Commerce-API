const express = require('express')
const Router = express.Router()

const departmRoute = require('./departmentsRoutes')
const categoriesRoute = require('./categoriesRoute')
const attributeRoute = require('./attributeRoutes')

Router.use('/', departmRoute)
Router.use('/', categoriesRoute)
Router.use('/', attributeRoute)

module.exports = Router