const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User= require('../Model/userModel');
const asyncHandler = require("express-async-handler");

const pass = asyncHandler( async () => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.JWT_secret;
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findOne({ id: jwt_payload.sub });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    }));
});


module.exports= pass;