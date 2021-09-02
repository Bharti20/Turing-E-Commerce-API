const knex = require('../databaseConnection/connection')

// get shippings regions
const shippingsRegions = (req, res) => {
    knex.select('*').from('shipping_region')
    .then((allRegions) => {
        res.send(allRegions)
    }).catch((err) => {
        res.send(err)
    });
};

//by id
const regionsById = (req,res) => {
    knex.select('shipping_id', 'shipping_type','shipping_cost','shipping_region_id').from('shipping')
    .where({shipping_region_id: req.params.shipping_region_id})
    .then((regions) => {
        res.send(regions)
    }).catch((err) => {
        res.send(err)
    });
};


module.exports = {
    shippingsRegions,
    regionsById
}