const express = require('express')
const Router = express.Router()

const customersController = require('../controller/customers')

Router.post('/customer/register', customersController.userRegister)


module.exports = Router