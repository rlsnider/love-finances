const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const User = require('../models/userModel');

// GET category list
//route GET /api/categories
const getCategories = asyncHandler(async(req, res) => {
    const categories = await Category.find({ user: req.user.id })
    res.status(200).json(categories)
})

// POST new Category
//route POST /api/categories
const newCategory = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a category name')
    }
    const category = await Category.create({
        name: req.body.name,
        user: req.user.id
    })
    res.status(200).json(category)
   
})

// PUT edit Account
//route PUT /api/categories/:id
const editCategory = asyncHandler(async(req, res) => {
    const category = await Category.findById(req.params.id)

    if(!category){
        res.status(400)
        throw new Error('Category not found')
    }
    const user = await User.findById(req.user.id)

    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
 //Make sure the logged in user matches the user category
    if(category.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')        
    }

    const editedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(editedCategory)

})

//DELETE delete Category
//route DELETE /api/categories/:id
const deleteCategory = asyncHandler(async(req, res) => {
    const category = await Category.findById(req.params.id)

    if(!category){
        res.status(400)
        throw new Error('Category not found')
    }
<<<<<<< HEAD
    const user = await User.findById(req.user.id)
    
    //logged in user matches user category
    if (category.user.toString() !== user.id) {
=======
   //check for user
   if (!req.user) {
    res.status(401)
    throw new Error('User not found')
   }
    
    //logged in user matches user category
    if (category.user.toString() !== req.user.id) {
>>>>>>> main
        res.status(401)
        throw new Error('User not authorized')
    }
    await category.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getCategories,
    newCategory,
    editCategory,
    deleteCategory
}