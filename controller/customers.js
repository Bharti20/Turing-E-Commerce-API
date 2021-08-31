const knex = require('../databaseConnection/connection')

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
    knex.select("*").from('customer')
    .then((userData) => {
        let i = 0
        while(i<userData.length) {
            if(userData[i]['name'] == req.body.name && userData[i]['password'] == req.body.password) {
                
            }
        }
    })
}


module.exports = {
    userRegister
}