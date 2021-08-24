const knex = require('../databaseConnection/connection')

module.exports.departments = (req, res) => {
    knex.from('department').select('*')
    .then((rows) => {
        res.send(rows)
    }).catch((err) => {
        res.send(err)
        console.log(err)
    });
};