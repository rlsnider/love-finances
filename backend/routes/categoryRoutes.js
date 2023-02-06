const express = require('express');
const router = express.Router();
const { getCategories, newCategory, editCategory, deleteCategory } = require('../controllers/categoryController')

router.route('/').get(getCategories).post(newCategory)
router.route('/:id').delete(deleteCategory).put(editCategory)


module.exports = router