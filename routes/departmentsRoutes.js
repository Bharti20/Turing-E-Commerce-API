const express = require('express')
const Router = express.Router()
const departmentsController = require('../controller/departments')

Router.get('/allDepartments', departmentsController.departments)
Router.get('/getById/:id', departmentsController.departmentById)

module.exports = Router
