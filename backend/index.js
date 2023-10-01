const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./Model/userModel')
const authentication = require('./Routes/authentication');
const { notFound, errorHandler } = require('./Middleware/errorMiddle');
dotenv.config();
const Port = process.env.PORT ;
connectDB();

const app=express();


// passport.use(new JwtStrategy(
//     {
//         jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey : process.env.Passport_Secret,
//     }, function(jwt_payload, done) 
//     {
//         User.findOne({id: jwt_payload.sub}, function(err, user) {
//             if (err) {
//                 return done(err, false);
//             }
//             if (user) {
//                 return done(null, user);
//             } else {
//                 return done(null, false);
//                 // or you could create a new account
//             }
//         });
//     }
// ));

// For checking server 
app.use(express.json());
app.use("/auth", authentication);



app.get('/',(req,res)=>{
    res.send("Working Properly");
});

app.use(notFound);
app.use(errorHandler);

app.listen(Port, ()=>{
    console.log(`The server Started listining on PORT ${Port}`);
});