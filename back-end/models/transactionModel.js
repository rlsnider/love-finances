const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
     
    account: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Account'
    },
    date: {
       type: String, //how do you format this?
    },
    transaction_num:{
        type: String, 
        required: false,
    },
    payee: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Payee'
    },
    memo:{
        type: String
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    
    payment: {
        type: String,//format for currency? if null then input = 0
        //ref to account and category?
    },
    deposit: {
        type: String,//format for currency? if null then input = 0
        //ref to account and category?
    },
    account_balance: {
        type:String,//format for currency?  keep running total of all payments and deposits for this account.
    },
    category_balance:{
        type:String,//format for currency? keep running total of all payments and deposits for this category
    },//does the account.balance and category.balance need to ref the other models?
    balance: {
        type: String,//format for currency? Balance of all accounts.
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)