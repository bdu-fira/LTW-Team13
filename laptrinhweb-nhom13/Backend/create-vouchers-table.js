const pool = require('./src/config/db');

async function createVouchersTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS vouchers (
        voucher_id INT AUTO_INCREMENT PRIMARY KEY,
        code VARCHAR(50) UNIQUE NOT NULL,
        discount_percent DECIMAL(5,2) NOT NULL,
        max_discount_amount DECIMAL(10,2),
        min_order_value DECIMAL(10,2) DEFAULT 0,
        expiration_date DATETIME,
        usage_limit INT DEFAULT 100,
        used_count INT DEFAULT 0,
        is_active TINYINT(1) DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Add sample voucher
    await pool.query(`
      INSERT IGNORE INTO vouchers (code, discount_percent, max_discount_amount, min_order_value, expiration_date) 
      VALUES 
      ('GIAM10', 10, 500000, 1000000, '2026-12-31 23:59:59'),
      ('WELCOME20', 20, 1000000, 0, '2026-12-31 23:59:59')
    `);

    console.log('✅ Bảng vouchers đã được tạo thành công!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Lỗi:', err.message);
    process.exit(1);
  }
}

createVouchersTable();
