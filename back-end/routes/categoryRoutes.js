const express = require('express');
const router = express.Router();
const { getCategories, newCategory, editCategory, deleteCategory } = require('../controllers/categoryController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getCategories).post(protect, newCategory)
router.route('/:id').delete(protect, deleteCategory).put(protect, editCategory)


module.exports = router