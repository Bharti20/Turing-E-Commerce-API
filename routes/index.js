const express = require('express')
const Router = express.Router()

const getDepartmentRoute = require('./getDepartmentsRoute')

Router.use('/seeDepartments', getDepartmentRoute)

module.exports = Router