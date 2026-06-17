const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Flowpay Starter Project');
});

app.listen(port, () => {
  console.log(`Flowpay app listening on port ${port}`);
});