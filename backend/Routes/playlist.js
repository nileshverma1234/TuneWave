const express = require('express');
const passport = require('passport');
const router = express.Router();
const {createPlaylist, getPlaylistById, getPlaylistByArtist, addSong, getMe} = require('../Controllers/playlistController');


router.post('/create', passport.authenticate("jwt", { session: false }), createPlaylist);
router.get('/get/playlist/:playlistId', passport.authenticate("jwt", { session: false }), getPlaylistById);
router.get('/get/artist/:artistId', passport.authenticate("jwt", { session: false }), getPlaylistByArtist);
router.post('/add/song', passport.authenticate("jwt", { session: false }), addSong);
router.get('/get/me', passport.authenticate("jwt", { session: false }), getMe);
module.exports=router;