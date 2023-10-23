const express = require('express');
const router = express.Router();
const passport = require('passport');
const {newSong, getSongs, getSongsByArtist, getSongsByName} = require('../Controllers/songControllers');


router.post('/create', passport.authenticate("jwt", { session: false }), newSong);
router.get('/get/mysongs', passport.authenticate("jwt", { session: false }), getSongs);
router.get('/get/artist/:artistId', passport.authenticate("jwt", { session: false }), getSongsByArtist);
router.get('/get/name/:songName', passport.authenticate("jwt", { session: false }), getSongsByName);

module.exports= router;