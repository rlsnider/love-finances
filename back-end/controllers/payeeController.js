const asyncHandler = require('express-async-handler')
const Payee = require('../models/payeeModel');

// GET payee list
//route GET /api/payees
const getPayees = asyncHandler(async(req, res) => {
    const payees = await Payee.find()
    res.status(200).json(payees)
})
// POST new Payee
//route POST /api/payees
const newPayee = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add new Payee')
    }
    const payee = await Payee.create({
        name: req.body.name
    })
    res.status(200).json(payee)
   
})

// PUT edit Payee
//route PUT /api/payee/:id
const editPayee = asyncHandler(async(req, res) => {
    const payee = await Payee.findById(req.params.id)
    if(!payee) {
        res.status(400)
        throw new Error('Could not find payee')
    }
    const editedpayee = await Payee.findByIdAndUpdate(req.params.id, req.body, {new: true})
res.status(200).json(editedpayee)
})

//DELETE delete Payee
//route DELETE /api/payee/:id
const deletePayee = asyncHandler(async(req, res) => {
    const payee = await Payee.findById(req.params.id)
    if(!payee) {
        res.status(400)
        throw new Error('Could not find payee')
    }
    await payee.remove()
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getPayees,
    newPayee,
    editPayee,
    deletePayee
}