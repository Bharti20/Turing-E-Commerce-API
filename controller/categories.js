const knex = require('../databaseConnection/connection')

// all categories
let selectAllCategories = (req, res) => {
    knex.select('*').from('category')
    .then((categories) => {
        res.send(categories)
        console.log(categories)
    }).catch((err) => {
        res.send(err)
        console.log(err)
    });
};

module.exports = {
    selectAllCategories
}
