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

// by category_id
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

//by department_id

const productsOnDepartment = (req, res) =>{
    knex('product')
    .join('department', 'department.department_id','=','product.product_id' )
    .where('department.department_id',req.params.department_id)
    .select('product.product_id', 'product.name','product.description', 'product.price', 'product.discounted_price', 'product.thumbnail')
    .then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    });
};

//product details by id
const productDetails = (req, res) => {
    knex('product')
    .where('product.product_id', req.params.product_id)
    .select('product.product_id', 'product.name','product.description', 'product.price', 'product.discounted_price', 'product.image','product.image_2')
    .then((details) => {
        res.send(details)
    }).catch((err) => {
        res.send(err)
    });
}

// product location
const productLocation = (req, res) => {
    knex('category')
    .join('product', 'product.product_id', '=', 'category.category_id')
    .join('department', 'department.department_id', '=','category.department_id')
    .where('product.product_id', req.params.product_id)
    .select({category_id:'category.category_id', category_name:'category.name', department_id:'category.department_id', department_name:'department.name'})
    .then((productLocation) => {
        res.send(productLocation)
    }).catch((err) => {
        res.send(err)
    });
}
//review
const productReview = (req, res) => {
    knex.select('*').from('review')
    .then((reviews) => {
        res.send('reviews')
    }).catch((err) => {
        res.send(err)
    });
};

module.exports = {
    selectProducts,
    searchProduct,
    productById,
    getProductOfCategory,
    productsOnDepartment,
    productDetails,
    productLocation,
    productReview
}