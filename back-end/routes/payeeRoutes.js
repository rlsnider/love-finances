const express = require('express');
const router = express.Router();
const { getPayees, newPayee, editPayee, deletePayee } = require('../controllers/payeeController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPayees).post(protect, newPayee)
router.route('/:id').delete(protect, deletePayee).put(protect, editPayee)


module.exports = router