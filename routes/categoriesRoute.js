const express = require('express')
const Router = express.Router()

const getCategories = require('../controller/categories')

Router.get('/allCategories', getCategories.selectAllCategories)
Router.get('/categoryById/:id', getCategories.selectById)
Router.get('/categoryOfProduct/:id', getCategories.selectCategoryOfproduct)
Router.get('/categoryOfDepartment/:id', getCategories.selectCategoryOfDepartment)

module.exports = Router
