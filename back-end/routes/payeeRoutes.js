const express = require('express');
const router = express.Router();
const { getPayees, newPayee, editPayee, deletePayee } = require('../controllers/payeeController')

router.route('/').get(getPayees).post(newPayee)
router.route('/:id').delete(deletePayee).put(editPayee)


module.exports = router