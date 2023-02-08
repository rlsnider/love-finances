const asyncHandler = require('express-async-handler')
const Payee = require('../models/payeeModel');

// GET payee list
//route GET /api/payees
const getPayees = asyncHandler(async(req, res) => {
    res.status(200).json({ message: ' Get Payees ' })
})

// POST new Payee
//route POST /api/payees
const newPayee = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Create Payee"})
   
})

// PUT edit Payee
//route PUT /api/payee/:id
const editPayee = asyncHandler(async(req, res) => {
res.status(200).json({ message: "Edit Payee"})
})

//DELETE delete Payee
//route DELETE /api/payee/:id
const deletePayee = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "Delete this payee"})
})

module.exports = {
    getPayees,
    newPayee,
    editPayee,
    deletePayee
}