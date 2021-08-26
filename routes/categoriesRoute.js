const express = require('express')
const Router = express.Router()

const getCategories = require('../controller/categories')

Router.get('/categories', getCategories.selectAllCategories)
Router.get('/categories/:id', getCategories.selectById)
Router.get('/categories/inProduct/:id', getCategories.selectCategoryOfproduct)
Router.get('/categories/inDepartment/:id', getCategories.selectCategoryOfDepartment)

module.exports = Router
