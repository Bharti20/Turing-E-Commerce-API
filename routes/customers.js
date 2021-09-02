const express = require('express')
const Router = express.Router()

const customersController = require('../controller/customers')

Router.post('/customer/register', customersController.userRegister)
Router.get('/customer/logIn',customersController.userLogin)
Router.get('/customer/byId/:customer_id', customersController.customerById)
Router.put('/customer/Dataupdate/:customer_id', customersController.updateCustomer)
Router.put('/customer/updateAddress/:customer_id', customersController.updateAddress)
Router.put('/customer/updateCreaditCard/:customer_id',customersController.updateCreaditCard )


module.exports = Router