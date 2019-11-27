const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();


router.get('/feeds', feedController.getFeeds);

// POST /feed/post
router.post(
  '/create', feedController.createFeed
);



router.delete('/delete/:Id', feedController.deleteFeed);

module.exports = router;
