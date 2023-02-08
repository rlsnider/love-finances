const express = require('express');
const router = express.Router();
const { getTransactions, newTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')

router.route('/').get(getTransactions).post(newTransaction)
router.route('/:id').delete(deleteTransaction).put(editTransaction)


module.exports = router