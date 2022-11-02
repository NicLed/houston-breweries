const express = require('express');
const app = express();
const PORT = process.port.env || 4444;

app.use(express.static('dist'));

app.listen(PORT, () => {
  `Listening on port ${PORT}`;
})