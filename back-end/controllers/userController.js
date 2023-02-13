const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// register user
//route: POST /api/users/

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    // check to see if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
      res.status(400)
      throw new Error('Invalid user data')  
    }
})

//Authenticate a user 
//route: POST /api/users/login
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})
    
    //check password
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name, 
            email: user.email,
            token: generateToken(user._id)
        })
    }   else {
        res.status(400)
        throw new Error('Invalid login information')
    }
})

//Get user data
//route Get /api/users/me
const getMe = asyncHandler(async(req, res) => {
<<<<<<< HEAD
    const { _id, name, email} = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
    })

=======
    res.status(200).json(req.user)
>>>>>>> main
})

//Generate Token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5000d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}