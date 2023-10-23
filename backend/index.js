const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./Model/userModel')
const authentication = require('./Routes/authentication');
const { notFound, errorHandler } = require('./Middleware/errorMiddle');
const song = require('./Routes/song');
const pass =require('./config/pport');

dotenv.config();
const Port = process.env.PORT ;

const app=express();
app.use(express.json());

connectDB();

pass();

// var opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.JWT_secret;
// passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
//     try {
//         const user = await User.findOne({ id: jwt_payload.sub });
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     } catch (err) {
//         return done(err, false);
//     }
//  }));


app.use("/auth", authentication);
app.use("/song", song);


app.get('/',(req,res)=>{
    res.send("Working Properly");
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, ()=>{
    console.log(`The server Started listining on PORT ${Port}`);
});