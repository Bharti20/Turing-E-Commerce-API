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
    .where({attribute_id:req.params.attribute_id})
    .then((row) => {
        res.send(row)
    }).catch((err) =>{
        res.send(err)
    });
};

// get values from attribute_id

const getValues = (req, res) => {
    knex.from('attribute')
    .join('attribute_value', 'attribute.attribute_id', '=','attribute_value.attribute_id')
    .select('attribute_value.attribute_value_id', 'value')
    .where('attribute_value.attribute_id', req.params.attribute_id)
    .then((values) => {
        res.send(values)
    }).catch((err) => {
        res.send(err)
    });
};

//join three tables
const attributeWithProductId = (req, res) => {
    let product = req.params.id
    knex('attribute_value')
    .join('product_attribute', 'product_attribute.attribute_value_id', '=','attribute_value.attribute_value_id')
    .join('attribute', 'attribute.attribute_id', '=', 'attribute_value.attribute_id' )
    .select('attribute_value.attribute_value_id', 'value', 'attribute.name')
    .where('product_attribute.product_id', product)
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    });
};

module.exports = {
    attributesList,
    attributeById,
    getValues,
    attributeWithProductId
}