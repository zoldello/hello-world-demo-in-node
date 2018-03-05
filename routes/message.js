const express = require('express');
const MessageDataService = require('../data/message');

const router = express.Router();

router.get('/welcome', (req, res, next) => {
    const messageDataService = new MessageDataService();
    let welcomeData = messageDataService.read();

    res.status(200).json(welcomeData);
});

module.exports = router;
