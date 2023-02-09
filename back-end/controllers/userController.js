//Authenticate a user 
//route: POST /api/users/login
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

// register user
//route: POST /api/users/

const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

//Get user data
//route Get /api/users/me
const getMe = (req, res) => {
    res.json({ message: 'Get user data'})
} 

module.exports = {
    registerUser,
    loginUser,
    getMe
}