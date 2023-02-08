const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')

// GET account list
//route GET /api/accounts
const getAccounts = asyncHandler(async(req, res) => {
    const accounts = await Account.find()
    res.status(200).json(accounts)
})


// POST new Account
//route POST /api/accounts
const newAccount = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const account = await Account.create({
        name: req.body.name
    })
    res.status(200).json(account)
   
})

// PUT edit Account
//route PUT /api/accounts/:id
const editAccount = asyncHandler(async(req, res) => {
    const account = await Account.findById(req.params.id)

    if (!account) {
        res.status(400)
        throw new error('Account not found')
    }
    const editedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true,})
res.status(200).json(editedAccount)
})

//DELETE delete Account
//route DELETE /api/accounts/:id
const deleteAccount = asyncHandler(async(req, res) => {
    const account = await Account.findById(req.params.id)

    if(!account){
        res.status(400)
        throw new error('Account not found')
    }
    await account.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAccounts,
    newAccount,
    editAccount,
    deleteAccount
}