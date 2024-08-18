const router = require("express").Router();
const apiRoutes = require("./api");
const bodyParser = require("body-parser");
const { Post } = require("../models");
const dayjs = require("dayjs");
const { ensureAuthenticated, isLoggedIn } = require("../utils/auth");
const methodOverride = require('method-override');




router.use("/api", apiRoutes);
router.use(bodyParser.json());
router.use(methodOverride('_method'));

// router.get("/dashboard", (req, res) => {
//   console.log(`1@@@@@@@@@@dashboard`);
//   res.render('dashboard', { title: 'Dashboard' });
// });

// router.get("/dashboard", ensureAuthenticated, (req, res) => {
//   res.render("dashboard");
// });


//render the blog posts on dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {user_id: req.user.id},
      order: [["createdAt", "DESC"]],
    });

    // Map over the posts to format the createdAt date
    const posts = postData.map((post) => {
      const plainPost = post.get({ plain: true });

      // Format the createdAt date
      plainPost.createdAt = dayjs(plainPost.createdAt).format("MM/DD/YYYY");
      return plainPost;
    });
    console.log(`3333333`, req.user);

    res.render("dashboard", {
      posts,
      logged_in: isLoggedIn(req),
    });
    // res.status(200);
  } catch (err) {
    console.log(`5555555555555`, err);
    res.status(500).json(err);
  }
});

module.exports = router;




router.get("/blog-form", (req, res) => {
  console.log(`1@@@@@@@@@@blogform`);
  res.render("blogForm", { title: "Create New Blog Post" ,
    logged_in: isLoggedIn(req),
  });
});

router.get("/blog-post", (req, res) => {
  console.log(`1@@@@@@@@@@blogpost`);
  res.render("blogPost", { title: "Blog Post" , logged_in: isLoggedIn(req)});
});

//render the blog posts on homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["createdAt", "DESC"]],
    });

    // Map over the posts to format the createdAt date
    const posts = postData.map((post) => {
      const plainPost = post.get({ plain: true });

      // Format the createdAt date
      plainPost.createdAt = dayjs(plainPost.createdAt).format("MM/DD/YYYY");
      return plainPost;
    });
    console.log(`3333333`, req.user);

    res.render("home", {
      posts,
      logged_in: isLoggedIn(req),
    });
    // res.status(200);
  } catch (err) {
    console.log(`5555555555555`, err);
    res.status(500).json(err);
  }
});

module.exports = router;
