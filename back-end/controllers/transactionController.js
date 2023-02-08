
// GET transaction log
//route GET /api/transactions
const getTransactions = (req, res) => {
    res.status(200).json({ message: 'Get Transactions' })
}

// POST new Transaction
//route POST /api/transactions
const newTransaction = (req, res) => {
    res.status(200).json({ message: "Create Transaction"})
   
}

// PUT edit Transaction
//route PUT /api/transactions/id
const editTransaction = (req, res) => {
res.status(200).json({ message: "Edit Transaction"})
}

//DELETE delete Transaction
//route DELETE /api/transaction/id
const deleteTransaction = (req, res) => {
    res.status(200).json({ message: "Delete this transaction"})
}

module.exports = {
    getTransactions,
    newTransaction,
    editTransaction,
    deleteTransaction
}