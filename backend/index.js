const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authentication = require('./Routes/authentication');
const song = require('./Routes/song');
const playlistRoutes = require('./Routes/playlist');
const { notFound, errorHandler } = require('./Middleware/errorMiddle');
const pass =require('./config/pport');
const cors = require('cors');

dotenv.config();
const Port = process.env.PORT ;

const app=express();
app.use(cors());
app.use(express.json());

connectDB();

pass();

app.use("/auth", authentication);
app.use("/song", song);
app.use("/playlist", playlistRoutes);

app.get('/',(req,res)=>{
    res.send("Working Properly");
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, ()=>{
    console.log(`The server Started listining on PORT ${Port}`);
});