const express = require('express');
const app = express();
const PORT = process.env.PORT || 2244;
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const tweetRouter = require('./routes/tweets.routes');

app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{
    try{
        res.send({messege:"Homepage Hello World"})
    }
    catch(err){
        res.status(404).send("This Looks Little Wrong")
    }
})

app.use("/users",userRouter);
app.use("/tweets",tweetRouter);


app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})