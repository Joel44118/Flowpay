class Payment {
  constructor(id, amount, currency) {
    this.id = id;
    this.amount = amount;
    this.currency = currency;
  }

  static async getAll(db) {
    const [rows] = await db.execute('SELECT * FROM payments');
    return rows.map((row) => new Payment(row.id, row.amount, row.currency));
  }
}

module.exports = Payment;