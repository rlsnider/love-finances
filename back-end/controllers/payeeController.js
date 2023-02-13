const asyncHandler = require('express-async-handler')
const Payee = require('../models/payeeModel');
const User = require('../models/userModel');

// GET payee list
//route GET /api/payees
const getPayees = asyncHandler(async(req, res) => {
    const payees = await Payee.find({ user: req.user.id })
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
        name: req.body.name,
        user: req.user.id
    })
    res.status(200).json(payee)
   
})

// PUT edit Payee
//route PUT /api/payee/:id
const editPayee = asyncHandler(async(req, res) => {
    const payee = await Payee.findById(req.params.id)

    if (!payee) {
        res.status(400)
        throw new error('Account not found')
    }
    const user = await User.findById(req.user.id)

    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the user's payee
    if(payee.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')        
    }
    const editedPayee = await Payee.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(editedPayee)
})


//DELETE delete Payee
//route DELETE /api/payee/:id
const deletePayee = asyncHandler(async(req, res) => {
    const payee = await Payee.findById(req.params.id)
    if(!payee) {
        res.status(400)
        throw new Error('Could not find payee')
    }
<<<<<<< HEAD
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    const user = await User.findById(req.user.id)
    
    //Make sure the logged in user matches the user's payee
    if(payee.user.toString() !== user.id){
=======
    //Check for User
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    //Make sure the logged in user matches the user's payee
    if(payee.user.toString() !== req.user.id){
>>>>>>> main
        res.status(401)
        throw new Error('User not authorized')        
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