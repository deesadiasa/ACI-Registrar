const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Document Repository!');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});