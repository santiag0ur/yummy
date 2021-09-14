'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.render('home/index', { title: 'Tummy In My Tummy!' });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('home');
});

module.exports = router;
