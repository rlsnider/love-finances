const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

// GET category list
//route GET /api/categories
const getCategories = asyncHandler(async(req, res) => {
    res.status(200).json({ message: ' Get category list ' })
})

// POST new Category
//route POST /api/categories
const newCategory = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Create category"})
   
})

// PUT edit Account
//route PUT /api/categories/:id
const editCategory = asyncHandler(async(req, res) => {
res.status(200).json({ message: "Edit Category"})
})

//DELETE delete Category
//route DELETE /api/categories/:id
const deleteCategory = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Delete this category"})
})

module.exports = {
    getCategories,
    newCategory,
    editCategory,
    deleteCategory
}