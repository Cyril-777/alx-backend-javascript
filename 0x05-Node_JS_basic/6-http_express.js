const express = require('express');

const app = express();
const port = 1245;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
