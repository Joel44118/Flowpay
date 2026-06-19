class Payment {
  constructor(amount, cardNumber, expirationDate, cvv) {
    this.amount = amount;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}
module.exports = Payment;