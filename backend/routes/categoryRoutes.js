const express = require('express');
const router = express.Router();
const { getCategories, getCategoryById,newCategory, editCategory, deleteCategory } = require('../controllers/categoryController')

router.route('/').get(getCategories).post(newCategory)
router.route('/:id').delete(deleteCategory).get(getCategoryById).put(editCategory)


module.exports = router