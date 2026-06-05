const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const voucherController = require('../controllers/voucherController');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

router.use(authenticate, authorizeAdmin);

router.get('/dashboard', adminController.getDashboardStats);
router.get('/users', adminController.getAllUsers);
router.post('/users', adminController.createUser);
router.put('/users/:id/status', adminController.updateUserStatus);
router.put('/users/:id/role', adminController.updateUserRole);
router.post('/users/:id/reset-password', adminController.resetUserPassword);
router.delete('/users/:id', adminController.deleteUser);

// Vouchers (Admin)
router.get('/vouchers', voucherController.getAllVouchers);
router.post('/vouchers', voucherController.createVoucher);
router.put('/vouchers/:id', voucherController.updateVoucher);
router.delete('/vouchers/:id', voucherController.deleteVoucher);

module.exports = router;
