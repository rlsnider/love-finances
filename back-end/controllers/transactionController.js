const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const Account = require('../models/accountModel');
const Transaction = require('../models/transactionModel');
const Payee = require('../models/payeeModel');

// GET transaction log
//route GET /api/transactions
const getTransactions = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get Transactions' })
})

// POST new Transaction
//route POST /api/transactions
const newTransaction = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Create Transaction"})
   
})

// PUT edit Transaction
//route PUT /api/transactions/id
const editTransaction = asyncHandler(async(req, res) => {
res.status(200).json({ message: "Edit Transaction"})
})

//DELETE delete Transaction
//route DELETE /api/transaction/id
const deleteTransaction = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Delete this transaction"})
})

module.exports = {
    getTransactions,
    newTransaction,
    editTransaction,
    deleteTransaction
}