const knex = require('../databaseConnection/connection')
const crypto = require('crypto')
//genrate uniqueId
const genrateUniqueId = (req, res) => {
    let uniqueId = crypto.randomBytes(8).toString('hex')
    res.send(`UniqueId:- ${uniqueId}`)
};

//add a product in cart
const addProduct = (req, res) => {
    let productD = {
        cart_id: req.body.cart_id,
        product_id : req.body.product_id,
        attributes: req.body.attributes,
        quantity: req.body.quantity,
        added_on: req.body.added_on  
    }
    knex('shopping_cart').insert(productD).then(() => {res.send(`product added`)
        }).catch((err) => {
            res.send(err)
        });
};

//product by cart_id
const productByCartId = (req,res) => {
    knex('shopping_cart')
    .join('product', 'shopping_cart.product_id', '=', 'product.product_id')
    .where('shopping_cart.cart_id', req.params.cart_id)
    .select('shopping_cart.item_id','product.name','shopping_cart.attributes','product.product_id','product.image','product.price','shopping_cart.quantity')
    .then((productData) => {
         let subtotal = productData[0]['price'] * productData[0]['quantity']
         productData[0]['subtotal'] = subtotal
         res.send(productData)
    }).catch((err) => {
        res.send(err)
    });
    
};
// update cart by item_id
const updateByItemId = (req, res) => {
    knex('shopping_cart')
    .where({item_id: req.params.item_id})
    .update({quantity: req.body.quantity})
    .then(() => {
        res.send('product quantity updated')
    }).catch((err) => {
        res.send(err)
    });
};
//delete by cart id
const deleteByCartId = (req, res) => {
    knex('shopping_cart')
    .where({cart_id: req.params.cart_id})
    .del().then(() => {
        res.send('one record deleted')
    }).catch((err) => {
        res.send(err)
    });
};

//moveToCart 
const moveToCart = (req,res) =>{
    knex.select('*').from('shopping_cart')
    .where({item_id: req.params.item_id})
    .then((dataForMove) => {
        knex('cart').insert(dataForMove)
        .then(() => {
            res.send('Data move to Cart')
        }).catch((err) => {
            res.send(err)
        });
    }).catch((err) =>{
        res.send(err)
    });
};

// Total amount of a product
const productAmout = (req, res) => {
    knex('shopping_cart')
    .join('product', 'shopping_cart.product_id', '=', 'product.product_id')
    .where('shopping_cart.cart_id', req.params.cart_id)
    .select('product.price','shopping_cart.quantity')
    .then((productData) => {
         let amount = productData[0]['price'] * productData[0]['quantity']
         let totalAmount = {
             "total_amount": amount
         }
         res.send(totalAmount)
    }).catch((err) => {
        res.send(err)
    });
}
module.exports = {
    genrateUniqueId,
    addProduct,
    productByCartId,
    updateByItemId,
    deleteByCartId,
    moveToCart,
    productAmout
}