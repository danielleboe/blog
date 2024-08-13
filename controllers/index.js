const router = require("express").Router();
const apiRoutes = require("./api");
const bodyParser = require("body-parser");
const { Post } = require("../models");
const dayjs = require('dayjs');

router.use("/api", apiRoutes);
router.use(bodyParser.json());

// router.get("/", (req, res) => {
//   console.log(`1@@@@@@@@@@home`);
//   res.render('home', { title: 'Home' });
// });

router.get("/dashboard", (req, res) => {
  console.log(`1@@@@@@@@@@dashboard`);
  res.render('dashboard', { title: 'Dashboard' });
});

router.get("/blog-form", (req, res) => {
  console.log(`1@@@@@@@@@@blogform`);
  res.render('blogForm', { title: 'Create New Blog Post' });
});

router.get("/blog-post", (req, res) => {
  console.log(`1@@@@@@@@@@blogpost`);
  res.render('blogPost', { title: 'Blog Post' });
});

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });

    // Map over the posts to format the createdAt date
    const posts = postData.map((post) => {
      const plainPost = post.get({ plain: true });
      // Format the createdAt date
      plainPost.createdAt = dayjs(plainPost.createdAt).format('MM/DD/YYYY');
      return plainPost;
    });

    res.render('home', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;


