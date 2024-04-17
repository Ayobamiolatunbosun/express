const express = require('express');
const { RouterProvider } = require('react-router-dom');
const router = express.Router()
const {getAllProducts, getSingleProducts, createAProduct, updateAProduct, deleteAProduct} = require('./controllers/ProductController')



// get all products
router.get('/products', getAllProducts)

// get a single product
router.get('/products/:id', getSingleProducts)

// create a product
router.post("/products", createAProduct)

//  updating a product
router.put("/products/:id", updateAProduct)

// deleting a product
router.delete("/products/:id", deleteAProduct)


module.exports = router


