// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Logs each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('🎉 Hello world from NodeJS!');
});

// API route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello World from the API!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});