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

// POST new Transaction   //helper?? Maybe here .
//route POST /api/transactions
const newTransaction = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Create Transaction"})
   
})




module.exports = {
    getTransactions,
    newTransaction,
 
  
}