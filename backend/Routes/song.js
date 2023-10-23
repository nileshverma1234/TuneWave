const express = require('express');
const router = express.Router();
const passport = require('passport');
const {newSong, getSongs} = require('../Controllers/songControllers');


router.post('/create', passport.authenticate("jwt", { session: false }), newSong);
router.get('/get/mysongs', passport.authenticate("jwt", { session: false }), getSongs);

module.exports= router;