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

module.exports = router;


