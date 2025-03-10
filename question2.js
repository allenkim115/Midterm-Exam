const express = require('express');
const app = express();

// Define the port
const PORT = 3000;

// Define the /test route
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Allen Kim C. Rafaela' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http:/ "/localhost:${PORT}`);
});
