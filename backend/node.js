const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // You can change the port if needed

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Handle root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
