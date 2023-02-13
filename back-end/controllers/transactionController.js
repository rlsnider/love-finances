const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const Account = require('../models/accountModel');
const Transaction = require('../models/transactionModel');
const Payee = require('../models/payeeModel');
const User = require('../models/userModel')

// GET transaction log
//route GET /api/transactions
const getTransactions = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get Transactions' })
})

<<<<<<< HEAD
// POST new Transaction
=======
// POST new Transaction   //helper?? Maybe here .
>>>>>>> main
//route POST /api/transactions
const newTransaction = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Create Transaction"})
   
})

<<<<<<< HEAD
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
=======


>>>>>>> main

module.exports = {
    getTransactions,
    newTransaction,
<<<<<<< HEAD
    editTransaction,
    deleteTransaction
=======
 
  
>>>>>>> main
}