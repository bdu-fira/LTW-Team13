const pool = require('./src/config/db');

async function testDB() {
  try {
    const [rows] = await pool.query('SELECT NOW() as db_time');
    console.log('DB Time:', rows[0].db_time);
    console.log('Node Time:', new Date());
    
    // Check tables
    const [tables] = await pool.query("SHOW TABLES LIKE '%otps%'");
    console.log('OTP Tables:', tables);
    
    const [otps] = await pool.query('SELECT * FROM register_otps');
    console.log('Register OTPs:', otps);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    process.exit();
  }
}
testDB();
