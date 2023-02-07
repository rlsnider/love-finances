const express = require('express');
const router = express.Router();
const { getAccounts, getAccountById, newAccount, editAccount, deleteAccount } = require('../controllers/accountController')

router.route('/').get(getAccounts).post(newAccount)
router.route('/:id').delete(deleteAccount).get(getAccountById).put(editAccount)


module.exports = router