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
// byId
let selectById = (req,res) => {
    knex.from('category')
    .where({category_id: req.params.id }).then((idData) => {
        res.send(idData)
        console.log(idData)
    }).catch((err) => {
        res.send(err)
    })
};

//Category Of product
const selectCategoryOfproduct = (req,res) => {
    knex('category')
    .join('product_category', 'category.category_id', '=', 'product_category.product_id')
    .select('category.category_id', 'category.department_id', 'category.name')
    .then((categoryOfProduct) => {
        res.send(categoryOfProduct)
    }).catch((err) => {
        res.send(err)
    });
};

// category of department
const selectCategoryOfDepartment = (req,res) => {
    knex.select('*').from('category').where({"department_id": req.params.id})
    .then((categoryOfDepartment) => {
        res.send(categoryOfDepartment)
    }).catch((err) => {
        res.send(err)
    })
}

module.exports = {
    selectAllCategories,
    selectById,
    selectCategoryOfproduct,
    selectCategoryOfDepartment
}
