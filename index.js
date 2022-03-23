const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{
    try{
        res.send({messege:"Homepage"})
    }
    catch(err){
        res.status(404).send("This Looks Little Wrong")
    }
})

app.get("/users", (req,res)=>{
    try{
        res.status(200).send({messege:"All Users"})
    }
    catch(err){
        res.status(400).send("This Went Terribly Wrong")
    }
})

app.get("/tweets",(req,res)=>{
    try{
        res.status(200).send({messege:"All Tweets"})
    }
    catch(err){
        res.status(400).send("This Went Terribly Wrong")
    }
})

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`);
})