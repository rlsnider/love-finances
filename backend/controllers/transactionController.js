
// GET transaction log
//route GET /api/transactions
const getTransactions = (req, res) => {
    pool.query('SELECT * FROM transactions', 
    (error, results) => {
        if (error) {
            throw new Error('Can not retrieve transaction log')
        }
        res.status(200).json(results.rows)
    })
}

//GET single transaction
//route GET /api/transactions/:id
const getTransactionById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM transactions WHERE id = $1', [id], 
    (error, results) => {
        if (error) {
            throw new Error('Can not retrieve transaction')
        }
        res.status(200).json(results.rows)
    })
}

// POST new Transaction
//route POST /api/transactions
const newTransaction = (req, res) => {
    const { account, date, transaction_num, payee, memo, category, reconciled, payment, deposit, account_balance, cleared_balance, balance } = req.body 

    pool.query(
        'INSERT INTO transactions(account, date, transaction_num, payee, memo, category, reconciled, payment, deposit, account_balance, cleared_balance, balance) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', 
        [account, date, transaction_num, payee, memo, category, reconciled, payment, deposit, account_balance, cleared_balance, balance], 
    (error, results) => {
        if (error) {
            throw new Error('Can not add new Transaction')
        }
        res.status(201).send(`Transaction added with ID: ${results.insertId}`)
    }
  )     
}

// PUT edit Transaction
//route PUT /api/transactions/id
const editTransaction = (req, res) => {
    const id = parseInt(req.params.id)
    const {account, date, transaction_num, payee, memo, category, reconciled, payment, deposit, account_balance, cleared_balance, balance } = req.body

    pool.query(
        'UPDATE transactions SET account = $1, date = $2, transaction_num = $3, payee = $4, memo = $5, category = $6, reconciled = $7, payment = $8, deposit = $9, account_balance = $10, cleared_balance = $11, balance = $12 WHERE id = $13',
        [account, date, transaction_num, payee, memo, category, reconciled, payment, deposit, account_balance, cleared_balance, balance, id],
        (error, results) => {
            if(error) {
            throw new Error('Not able to edit transaction')
        }
        res.status(200).json.send(`Transaction modified wiht ID: ${id}`)
    }
  )
}   

//DELETE delete Transaction
//route DELETE /api/transaction/id
const deleteTransaction = (req, res) => {
    const id = parseInt(req.params.id)
   
    pool.query('DELETE FROM transactions WHERE id = $1', [id], 
    (error, results) => { 
        if (error) { 
            throw new Error('Not able to delete transaction')
        }
        res.status(200).send(`Transaction deleted with ID: ${id}`)
    })
}

module.exports = {
    getTransactions,
    getTransactionById,
    newTransaction,
    editTransaction,
    deleteTransaction
}