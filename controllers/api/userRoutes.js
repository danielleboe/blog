// const router = require('express').Router();
// const { User } = require('../../models');

// // Create a new user (sign up)
// router.post('/signup', async (req, res) => {
//   try {
//     const newUser = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.user_id = newUser.id;
//       req.session.logged_in = true;
//       res.status(200).json(newUser);
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     console.log(`11111111userdatafindone`)

//     if (!userData) {
//       res.status(400).json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }
    

//     const validPassword = userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }
//     console.log(`valid password check`)

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: 'You are now logged in!' });
//     });
//     console.log(`you are now logged in console log`)

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Logout
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;


// routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('../../models');

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', async (req, res) => {
  const { username, password, password2 } = req.body;
  let errors = [];

  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', { errors, username, password, password2 });
  } else {
    try {
      const user = await User.findOne({ where: { username } });
      if (user) {
        errors.push({ msg: 'Username already exists' });
        res.render('register', { errors, username, password, password2 });
      } else {
        await User.create({ username, password });
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/users/login');
      }
    } catch (err) {
      console.error(err);
      res.render('register', { errors, username, password, password2 });
    }
  }
});

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout Handle
router.get('/logout', (req, res) => {
  req.logout(() => {
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });
});

module.exports = router;
