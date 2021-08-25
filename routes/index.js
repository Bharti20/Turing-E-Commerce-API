const express = require('express')
const Router = express.Router()

const departmRoute = require('./departmentsRoutes')
const categoriesRoute = require('./categoriesRoute')

Router.use('/', departmRoute)
Router.use('/', categoriesRoute)

module.exports = Router