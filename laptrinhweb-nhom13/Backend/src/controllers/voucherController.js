const pool = require('../config/db');

exports.getAllVouchers = async (req, res) => {
  try {
    const [vouchers] = await pool.query('SELECT * FROM vouchers ORDER BY created_at DESC');
    res.json({ success: true, data: vouchers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createVoucher = async (req, res) => {
  try {
    const { code, discount_percent, max_discount_amount, min_order_value, expiration_date, usage_limit } = req.body;
    await pool.query(
      'INSERT INTO vouchers (code, discount_percent, max_discount_amount, min_order_value, expiration_date, usage_limit) VALUES (?, ?, ?, ?, ?, ?)',
      [code, discount_percent, max_discount_amount || null, min_order_value || 0, expiration_date || null, usage_limit || 100]
    );
    res.status(201).json({ success: true, message: 'Thêm voucher thành công!' });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') return res.status(400).json({ success: false, message: 'Mã voucher đã tồn tại.' });
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateVoucher = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, discount_percent, max_discount_amount, min_order_value, expiration_date, usage_limit, is_active } = req.body;
    await pool.query(
      'UPDATE vouchers SET code=?, discount_percent=?, max_discount_amount=?, min_order_value=?, expiration_date=?, usage_limit=?, is_active=? WHERE voucher_id=?',
      [code, discount_percent, max_discount_amount || null, min_order_value || 0, expiration_date || null, usage_limit || 100, is_active, id]
    );
    res.json({ success: true, message: 'Cập nhật voucher thành công!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteVoucher = async (req, res) => {
  try {
    await pool.query('DELETE FROM vouchers WHERE voucher_id=?', [req.params.id]);
    res.json({ success: true, message: 'Xóa voucher thành công!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Public
exports.applyVoucher = async (req, res) => {
  try {
    const { code, order_amount } = req.body; // order_amount để check min_order_value
    const [rows] = await pool.query('SELECT * FROM vouchers WHERE code = ? AND is_active = 1', [code]);
    if (rows.length === 0) return res.status(400).json({ success: false, message: 'Mã giảm giá không hợp lệ hoặc đã hết hạn.' });
    
    const voucher = rows[0];
    if (voucher.expiration_date && new Date(voucher.expiration_date) < new Date()) {
      return res.status(400).json({ success: false, message: 'Mã giảm giá đã hết hạn.' });
    }
    if (voucher.used_count >= voucher.usage_limit) {
      return res.status(400).json({ success: false, message: 'Mã giảm giá đã hết lượt sử dụng.' });
    }
    if (order_amount < voucher.min_order_value) {
      return res.status(400).json({ success: false, message: `Đơn hàng chưa đạt giá trị tối thiểu ${voucher.min_order_value}đ để áp dụng mã này.` });
    }

    // Tính toán số tiền giảm
    let discount = (order_amount * voucher.discount_percent) / 100;
    if (voucher.max_discount_amount && discount > voucher.max_discount_amount) {
      discount = voucher.max_discount_amount;
    }

    res.json({ success: true, data: { voucher_id: voucher.voucher_id, code: voucher.code, discount_amount: discount } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
