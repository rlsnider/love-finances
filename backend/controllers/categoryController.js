
// GET category list
//route GET /api/categories
const getCategories = (req, res) => {
    res.status(200).json({ message: ' Get category list ' })
}

// POST new Category
//route POST /api/categories
const newCategory = (req, res) => {
    res.status(200).json({ message: "Create category"})
   
}

// PUT edit Account
//route PUT /api/categories/:id
const editCategory = (req, res) => {
res.status(200).json({ message: "Edit Category"})
}

//DELETE delete Category
//route DELETE /api/categories/:id
const deleteCategory = (req, res) => {
    res.status(200).json({ message: "Delete this category"})
}

module.exports = {
    getCategories,
    newCategory,
    editCategory,
    deleteCategory
}