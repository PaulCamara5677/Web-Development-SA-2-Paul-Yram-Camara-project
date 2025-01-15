require('dotenv').config(); // Load environment variables

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

