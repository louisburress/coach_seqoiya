const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the Backend!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

