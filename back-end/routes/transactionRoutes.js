const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { getTransactions, newTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTransactions).post(protect, newTransaction)
router.route('/:id').delete(protect, deleteTransaction).put(protect, editTransaction)
=======
const { getTransactions, newTransaction } = require('../controllers/transactionController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTransactions).post(protect, newTransaction)

>>>>>>> main


module.exports = router