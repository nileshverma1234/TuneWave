const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const Port = process.env.PORT ;

const app=express();

// For checking server 
app.get('/',(req,res)=>{
    res.send("Working Properly");
});


app.listen(Port, ()=>{
    console.log(`The server Started listining on PORT ${Port}`);
});