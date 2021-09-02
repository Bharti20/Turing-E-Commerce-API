const knex = require('../databaseConnection/connection')
require('dotenv').config()
const jwt = require('jsonwebtoken')

//register a user
const userRegister = (req, res) => {
    let userDetails = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    knex('customer').insert(userDetails).then(() => {
        res.send(userDetails)
        console.log('user details has inserted')
    }).catch((err) => {
        res.send(err)
    });
};
//login
const userLogin = (req, res) => {
    let secret_key = process.env.SECRET_KEY
    knex.select("*").from('customer')
    .then((userData) => {
        console.log(userData.length)
        let i = 0
        while(i<userData.length-1) {
            if(userData[i]['email'] == req.body.email && userData[i]['password'] == req.body.password) {
                break;
            }i++
        }
        if(userData[i]['email'] == req.body.email && userData[i]['password'] == req.body.password) {
            var token = jwt.sign({name:req.body.name, password:req.body.password}, secret_key)
            res.send(`User verified! 
            ${token}`)
            console.log(token)
        }else{
            res.send('user not found')
            console.log('User not found')
        }

    }).catch((err) => {
        res.send(err)
    });
}

//get customer by id
const customerById = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY,( err, verifiedJwt) => {
        if(err) {
            res.send(err)
        }else{
            knex.select('*').from('customer')
            .where({customer_id: req.params.customer_id})
            .then((customerDetails) => {
                res.send(customerDetails)
            }).catch((err) => {
                res.send(err)
            });
        };
        

    });
};

//update customer
const updateCustomer = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY,( err, verifiedJwt) => {
        if(err) {
            res.send(err)
        }else{
            knex('customer')
            .where({customer_id: req.params.customer_id})
            .update(
                    {
                        "name": req.body.name,
                        "email": req.body.email,
                        "password": req.body.password,
                        "day_phone": req.body.day_phone,
                        "eve_phone": req.body.eve_phone,
                        "mob_phone" : req.body.mob_phone
                    }
            )
            .then((updatedData) => {
                res.send('Customer Address Updated')
            }).catch((err) => {
                res.send(err)
            });
        };
    });
};
//update address
const updateAddress = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY,( err, verifiedJwt) => {
        if(err) {
            res.send(err)
        }else{
            knex('customer')
            .where({customer_id: req.params.customer_id})
            .update({
                "address_1": req.body.address_1,
                "address_2": req.body.address_2,
                "city": req.body.city,
                "region": req.body.region,
                "postal_code": req.body.postal_code,
                "country": req.body.country,
                "shipping_region_id": req.body.shipping_region_id
            })
            .then(() => {
                res.send('Customer Address Updated')
            }).catch((err) => {
                res.send(err)
            });
        };
    });
};
//update credit card
const updateCreaditCard = (req, res) => {
    let token = req.headers.authorization
    jwt.verify(token, process.env.SECRET_KEY,( err, verifiedJwt) => {
        if(err) {
            res.send(err)
        }else{
            knex('customer')
            .where({customer_id: req.params.customer_id})
            .update({
                "credit_card": req.body.credit_card
            })
            .then(() => {
                res.send('Creadit card updated')
            }).catch((err) => {
                res.send(err)
            });
        };
    });
};

module.exports = {
    userRegister,
    userLogin,
    customerById,
    updateCustomer,
    updateAddress,
    updateCreaditCard
}