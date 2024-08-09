const router = require("express").Router();
const apiRoutes = require("./api");
const bodyParser = require("body-parser");

router.use("/api", apiRoutes);
router.use(bodyParser.json());

router.get("/", (req, res) => {
  console.log(`1@@@@@@@@@@home`);
  res.render('homepage', { title: 'Home' });
});

router.get("/dashboard", (req, res) => {
  console.log(`1@@@@@@@@@@blog`);
  res.render('dashboard', { title: 'Dashboard' });
});

router.get("/blog-form", (req, res) => {
  console.log(`1@@@@@@@@@@blog`);
  res.render('blogForm', { title: 'Create New Blog Post' });
});

router.get("/blog-post", (req, res) => {
  console.log(`1@@@@@@@@@@blog`);
  res.render('blogPost', { title: 'Blog Post' });
});

module.exports = router;


