

const getAllTweets = (req,res) =>{
    res.status(200).json({messege:"All Tweets"})
}

const getSingleTweet = (req,res) => {
    res.status(200).json({User: `Tweet is ${req.params.id}`})
}


module.exports = {getAllTweets, getSingleTweet}