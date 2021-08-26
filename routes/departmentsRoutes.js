const express = require('express')
const Router = express.Router()
const departmentsController = require('../controller/departments')

Router.get('/departments', departmentsController.departments)
Router.get('/departments/:id', departmentsController.departmentById)

module.exports = Router
