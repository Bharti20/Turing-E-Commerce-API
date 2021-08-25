const express = require('express')
const Router = express.Router()

const departmRoute = require('./departmentsRoutes')

Router.use('/', departmRoute)


module.exports = Router