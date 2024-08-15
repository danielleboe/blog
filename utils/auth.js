// utils/auth.js
// const withAuth = (req, res, next) => {
//     if (!req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//       next();
//     }
//   };
  
//   module.exports = withAuth;
  


  module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Please log in to view this resource');
      res.redirect('/users/login');
    }
  };