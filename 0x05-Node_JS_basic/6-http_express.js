const express = require('express');
const app = express();
const port = 1245;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.originalUrl}</pre>
    </body>
    </html>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
