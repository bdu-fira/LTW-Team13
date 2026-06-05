const express = require('express');
const router = express.Router();
const voucherController = require('../controllers/voucherController');

router.post('/apply', voucherController.applyVoucher);

module.exports = router;
