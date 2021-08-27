const knex = require('../databaseConnection/connection')

const selectProducts = (req, res) => {
    knex.select('*').from('product')
        .then((allProducts) => {
            res.send(allProducts)
        }).catch((err) => {
            res.send(err)
        });
};

const searchProduct = (req, res) => {
    knex.from('product')
        .where({ name: req.params.search })
        .then((productDetails) => {
            res.send(productDetails)
        }).catch((err) => {
            res.send(err)
        });
};

//by id
const productById = (req, res) => {
    knex.from('product')
        .where({product_id : req.params.id})
        .then((idData) => {
            res.send(idData)
        }).catch((err) => {
            res.send(err)
        });
};

// joining three tables
const getProductOfCategory = (req, res) => {
    let id = req.params.category_id
    knex('product')
    .join('product_category', 'product.product_id', '=', 'product_category.product_id')
    .where('product_category.category_id', id)
    .select('*')
    .then((allProducts) => {
        res.send(allProducts)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectProducts,
    searchProduct,
    productById,
    getProductOfCategory
}