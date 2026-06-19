const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('FlowPay API')
});
app.listen(port, () => {
  console.log(`FlowPay API listening on port ${port}`)
})