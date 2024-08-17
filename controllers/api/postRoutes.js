const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const { isLoggedIn } = require("../../utils/auth");

// const express = require('express');
// const router = express.Router();
// const Post = require('../../models/Post');

// // GET all posts
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
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [User],
        },
        {
          model: User,
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('blogPost', { post, logged_in: isLoggedIn(req) });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new post
// router.post('/', async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       user_id: req.body.user_id,
//       post_title: req.body.post_title,
//       post_txt: req.body.post_txt,
//     });
//     res.json(newCategory);

//     // res.redirect('/');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// Route to handle the form submission
router.post('/', async (req, res) => {
  try {
    const { username, blogTitle, blogContent } = req.body;
    console.log(`blogcontent@@@@@`,blogContent, blogTitle);

    const newPost = await Post.create({
      user_id: req.user.id,
      post_title: blogTitle,
      post_txt: blogContent,
    });

    res.redirect(`/posts/${newPost.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
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

// // DELETE a post
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

// module.exports = router;

// Route to display the form to create a new post
router.get('/blogForm', (req, res) => {
  res.render('blogForm');
});



module.exports = router;
