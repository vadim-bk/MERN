const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../modules/User');
const router = Router();

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: 'Incorrect credentials' });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Such user already exists' });
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
);

// /api/auth/login
router.post('/login', async (req, res) => {});

module.exports = router;
