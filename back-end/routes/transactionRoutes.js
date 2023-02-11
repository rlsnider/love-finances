const express = require('express');
const router = express.Router();
const { getTransactions, newTransaction } = require('../controllers/transactionController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getTransactions).post(protect, newTransaction)



module.exports = router