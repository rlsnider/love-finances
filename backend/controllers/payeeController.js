
// GET payee list
//route GET /api/payees
const getPayees = (req, res) => {
    pool.query('SELECT * FROM payees', (error, results) => {
        if(error) {
            throw new Error('Can not retrieve payee list')
        }
        res.status(200).json(results.rows)
    }
  )
}

//GET Single payee 
//route /api/payees/:id
const getPayeeById = (req, res) => {
    const id = parseINt(req.params.id)
    pool.query (
        'SELECT * FROM payees WHERE id = $1', [id], 
        (error, results) => {
        if (error) {
            throw new Error('Can not retrieve payee')
        }
        res.status(200).json(results.rows)
    })
}
// POST new Payee
//route POST /api/payees
const newPayee = (req, res) => {
   const { name, account_num } = req.body
   
   pool.query(
    'INSERT INTO payees (name, account_num) VALUES ($1, $2)', 
    [name, account_num],
   (error, results) => {
    if (error) {
        throw new Error('Can not add payee')
    }
    res.status(201).send(`Payee added with ID: ${results.insertId}`)
   }) 
}

// PUT edit Payee
//route PUT /api/payee/:id
const editPayee = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, account_num } = req.body

    pool.query(
        'UPDATE payees SET name = $1, account_num = $2 WHERE id = $3',
        [name, account_num, id],
        (error, results) => {
            if (error) {
                throw new Error('Can not edit payee')
            }
            res.status(200).send(`Payee modified with ID: ${id}`)
        }
    )
}

//DELETE delete Payee
//route DELETE /api/payee/:id
const deletePayee = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM payees WHERE id = $1', [id], (error, results)=> {
        if(error) {
            throw new Error('Can not delete payee')
        }
        res.status(200).send(`Payee deleted with ID: ${id}`)
    })
}

module.exports = {
    getPayees,
    getPayeeById,
    newPayee,
    editPayee,
    deletePayee
}