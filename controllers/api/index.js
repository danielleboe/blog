const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');


router.use('/dashboard', dashboardRoutes);
router.use('/home', homeRoutes);
router.use('/login', userRoutes);

module.exports = router;