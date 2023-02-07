
// GET account list
//route GET /api/accounts
const getAccounts = (req, res) => {
    pool.query('SELECT * FROM accounts', (error, results) => {
        if (error) {
            throw new Error('could not retrieve list of accounts')
        }
        res.status(200).json(results.rows)
    })
}
//GET single account
//route GET /api/accounts/:id
const getAccountById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw new Error('could not retrieve account')
        }
        res.status(200).json(results.rows)
    })
}

// POST new Account
//route POST /api/accounts
const newAccount = (req, res) => {
    const { name, account_num } = req.body

    pool.query(
        'INSERT INTO accounts (name, account_num) VALUES ($1, $2)', 
        [ name, account_num],
    (error, results) => {
        if (error) {
            throw new Error ('Can not add this account')
        }
        res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

// PUT edit Account
//route PUT /api/accounts/:id
const editAccount = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, account_num } = req.body

    pool.query(
        'UPDATE accounts SET name = $1, account_num = $2 WHERE id = $3',
        [ name, account_num, id],
        (error, results) => {
            if (error) {
                throw new Error('cannot edit this account')
            }
            res.status(200).send(`Account modified with ID: ${id}`)
        }
    )

}
//DELETE delete Account
//route DELETE /api/accounts/:id
const deleteAccount = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM accounts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw new Error('Can not delete this account')
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getAccounts,
    getAccountById,
    newAccount,
    editAccount,
    deleteAccount
}