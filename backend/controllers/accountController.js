
// GET account list
//route GET /api/accounts
const getAccounts = (req, res) => {
    res.status(200).json({ message: ' Get Account list ' })
}

// POST new Account
//route POST /api/accounts
const newAccount = (req, res) => {
    res.status(200).json({ message: "Create Account"})
   
}

// PUT edit Account
//route PUT /api/accounts/:id
const editAccount = (req, res) => {
res.status(200).json({ message: "Edit Account"})
}

//DELETE delete Account
//route DELETE /api/accounts/:id
const deleteAccount = (req, res) => {
    res.status(200).json({ message: "Delete this Account"})
}

module.exports = {
    getAccounts,
    newAccount,
    editAccount,
    deleteAccount
}