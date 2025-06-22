const express = require('express');
const router = express.Router();

// Optional: A basic health check route
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

module.exports = router;
