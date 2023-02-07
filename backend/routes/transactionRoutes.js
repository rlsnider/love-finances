const express = require('express');
const router = express.Router();
const { getTransactions, getTransactionById, newTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')

router.route('/').get(getTransactions).post(newTransaction)
router.route('/:id').delete(deleteTransaction).get(getTransactionById).put(editTransaction)


module.exports = router