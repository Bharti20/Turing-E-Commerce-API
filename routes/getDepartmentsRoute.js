const express = require('express')
const Router = express.Router()

const getDepartmentController = require('../controller/getDepartmentsController')

Router.get('/', getDepartmentController.departments)

module.exports = Router