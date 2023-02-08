const express = require('express');
const router = express.Router();
const { getAccounts, newAccount, editAccount, deleteAccount } = require('../controllers/accountController')

router.route('/').get(getAccounts).post(newAccount)
router.route('/:id').delete(deleteAccount).put(editAccount)


module.exports = router