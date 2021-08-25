const knex = require('../databaseConnection/connection')

// get attributes list
const attributesList = (req,res) => {
    knex.select('*').from('attribute')
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    });
};

//by id
const attributeById = (req, res) => {
    knex.from('attribute')
    .where({attribute_id:req.params.id})
    .then((row) => {
        res.send(row)
    }).catch((err) =>{
        res.send(err)
    });
};

// get values from attribute_values

const getValues = (req, res) => {
    knex.from('attribute_value')
    .where({attribute_id: req.params.attribute_id}).then((values) => {
        res.send(values)
    }).catch((err) => {
        res.send(err)
    });
};

//get all attribute with product id
const attributeWithProductId = 



module.exports = {
    attributesList,
    attributeById,
    getValues
}