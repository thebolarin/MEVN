const fs = require('fs');
const path = require('path');
const Feed = require('../models/feed');


exports.getFeeds = async (req, res, next) => {
 
  Feed.find()
 
  .then(feed => {
    res.status(200).json({
     
      feeds: feed,
      
    });
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};

exports.createFeed = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const feed = new Feed({
    title: title,
    content: content,
  });
  feed.save() 
  .then(result => {
      res.status(200).json({
        message: 'Feed created successfully!',
        feed: feed,
      });

      
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};




exports.deleteFeed = (req, res, next) => {
  const feedId = req.params.feedId;
  
  Feed.findById(feedId)
    .then(feed=> {
      console.log(feed)
      return Feed.deleteOne(feed);
    })
   
    .then(result => {
      res.status(200).json({ message: 'Deleted task.' });
    }) 
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


