const router = require('express').Router();
const { User } = require('../../models');

// // GET all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll({
//     //   include: [],
//     });
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to retrieve users', error: err });
//   }
// });

// // GET a single user
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//     //   include: [{ model: City }],
//     });

//     if (!user) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to retrieve user', error: err });
//   }
// });

// // CREATE a new user
// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create({
//       user_id: req.body.user_id,
//     });
//     res.status(200).json(newUser);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //PUT - Update an exisiting user by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const [updated] = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (updated) {
//       const updatedUser = await User.findByPk(req.params.id);
//       res.json(updatedUser);
//     } else {
//       res.status(404).json({ message: 'No user found with this id!' });
//     }
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a user
// router.delete('/:id', async (req, res) => {
//   try {
//     const userData = await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!userData) {
//       res.status(404).json({ message: 'No user found with that id!' });
//       return;
//     }

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;


////


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
