
// GET category list
//route GET /api/categories
const getCategories = (req, res) => {
    pool.query('SELECT * FROM categories', (error, results) => {
        if (error) {
            throw new Error ('Can not retrieve category list')
        }
        res.status(200).json(results.rows)
    })
}

//GET category by Id
//route GET /api/category/:id
const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM categories WHERE id = $1', [id], (error, results) => {
        if (error){
            throw new Error('Could not retrieve category')
        }
        res.status(200).json(results.rows)
    })
}

// POST new Category
//route POST /api/categories
const newCategory = (req, res) => {
    const { name } = req.body

    pool.query('INSERT INTO categories (name) VALUES ($1)', [name],
    (error, results) => {
        if (error) {
            throw new Error('Can not add this category')
        }
        res.status(201).send(`Category added with ID: ${results.insertId}`)
    })
}


// PUT edit Account
//route PUT /api/categories/:id
const editCategory = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body

    pool.query( 
        'UPDATE categories SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
            if (error) {
                throw new Error('Can not edit this category')
            }
            res.status(200).send(`Category modified with ID: ${id}`)
        }
    )
}

//DELETE delete Category
//route DELETE /api/categories/:id
const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM categories WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw new Error('Can not delete this category')
        }
        res.status(200).send(`Category deleted with ID: ${id}`)
    })
}

module.exports = {
    getCategories,
    getCategoryById,
    newCategory,
    editCategory,
    deleteCategory
}