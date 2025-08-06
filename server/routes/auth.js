const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  res.status(200).json({
    message: 'User registered successfully',
    user: { username, email }
  });
});

module.exports = router;
