const sqlite3 = require('sqlite3').verbose();
let db;
function connect() {
  db = new sqlite3.Database('./flowpay.db');
}
function savePayment(payment) {
  db.run(`INSERT INTO payments (amount, recipient) VALUES (?, ?)`, [payment.amount, payment.recipient], function(err) {
    if (err) {
      console.error(err);
    }
  });
}
module.exports = { connect, savePayment };