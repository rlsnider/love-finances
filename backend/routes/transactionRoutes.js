const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: "Transaction Log"})
})

router.post('/', (req, res) => {
    res.status(200).json({ message: "Create Transaction"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `update transaction ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `delete transaction ${req.params.id}`})
})

module.exports = router