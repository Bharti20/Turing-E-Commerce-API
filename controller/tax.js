const knex = require('../databaseConnection/connection')

// get all taxes
const taxes = (req, res) => {
    knex.select('*').from('tax')
    .then((allTaxes) => {
        res.send(allTaxes)
    }).catch((err) => {
        res.send(err)
    });
};

//get tax by id
const taxById = (req, res) => {
    knex.select('*'). from('tax')
    .where({tax_id: req.params.tax_id})
    .then((taxIdData) => {
        res.send(taxIdData[0])
    }).catch((err) => {
        res.send(err)
    });
}

module.exports = {
    taxes,
    taxById
}