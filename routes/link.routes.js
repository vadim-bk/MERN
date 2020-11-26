const { Router } = require('express');
const Link = require('../modules/Link');
const router = Router();

router.post('/generate', async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/', async (req, res) => {
  try {
    const links = await Link.find({ owner: null }); // ???
    res.json(links);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const links = await Link.findById(req.pa); // ???
    res.json(links);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
