#!/usr/bin/env node

const express = require('express');
const messageData = require('../data/message');

const router = express.Router();

/* GET home page. */
router.get('/welcome', function(req, res, next) {
    const data = messageData();

  res.json(data);
});

module.exports = router;
