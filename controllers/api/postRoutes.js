const router = require('express').Router();
const { Post } = require('../../models');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
    //   include: [],
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve posts', error: err });
  }
});

// GET a single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
    //   include: [{ model: City }],
    });

    if (!post) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve post', error: err });
  }
});

// CREATE a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      post_id: req.body.post_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//PUT - Update an exisiting post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updated) {
      const updatedPost = await Post.findByPk(req.params.id);
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: 'No post found with this id!' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
