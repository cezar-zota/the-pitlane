const User = require('../models/User');
const passport = require('passport');

exports.showRegisterForm = (req, res) => {
  res.render('pages/register');
};

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.createUser(username, email, password);
    req.flash('success_msg', 'You are now registered and can log in');
    res.redirect('/users/login');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

exports.showLoginForm = (req, res) => {
  res.render('pages/login');
};

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/news',
  failureRedirect: '/users/login',
  failureFlash: true,
});

exports.logoutUser = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
};

exports.showAccountPage = (req, res) => {
  res.render('pages/account', { user: req.user });
};
