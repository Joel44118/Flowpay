const express = require('express');
const router = express.Router();
const db = require('./database');

router.post('/payment', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const result = await db.execute(`INSERT INTO payments (amount, currency) VALUES (?, ?)`, [amount, currency]);
    res.json({ id: result[0].insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating payment' });
  }
});

module.exports = router;