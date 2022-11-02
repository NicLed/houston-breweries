const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  `Listening on port ${PORT}`;
})