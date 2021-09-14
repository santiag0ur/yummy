'use strict';
// jshint esversion:10

const User = require('../models/user');

module.exports = (req, res, next) => {
  const userId = req.session.userId;
  if (userId) {
    User.findById(userId)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((error) => {
        next(error);
      });
  } else {
    next();
  }
};
