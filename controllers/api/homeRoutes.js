const router = require('express').Router();
const { Post } = require('../models');

// Route to get all blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['created_at', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
