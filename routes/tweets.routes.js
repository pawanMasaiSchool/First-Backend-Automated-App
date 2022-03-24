const { getAllTweets, getSingleTweet } = require('../controllers/tweets.controller');

const router = require('express').Router();

router.get("/", getAllTweets);

router.get("/:id",getSingleTweet);


module.exports = router