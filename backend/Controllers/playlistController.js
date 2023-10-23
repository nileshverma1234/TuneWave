const asyncHandler = require("express-async-handler");
const Playlist = require('../Model/playlistModel');
const User = require('../Model/userModel');
const Song = require('../Model/songModel');

const createPlaylist = asyncHandler(async (req,res)=>{
    const currentUser=req.user;
    const {name, thumbnail, songs}= req.body;
    if(!name || !thumbnail || !songs){
        return res.status(301).json({Error:"All fields are not provided"});
    }
    const playlistData = {name, thumbnail, songs, owner:currentUser._id, collaborators:[]};
    const playlist= await Playlist.create(playlistData);
    return res.status(200).json(playlist);
});

const getPlaylistById= asyncHandler(async (req,res)=>{
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(301).json({Error:"No Playlist Exist with such Id"});
    } 
    return res.status(200).json({Data:playlist});
});

const getPlaylistByArtist= asyncHandler(async (req, res)=>{
    const { artistId } = req.params; 
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(302).json({Error:"There is no artist with given id"});
    }
    const playlist = await Playlist.find({owner: artistId});
    return res.status(200).json({Data:playlist});
});

const addSong= asyncHandler(async (req, res)=>{
    const currentUser= req.user;
    const{playlistId, songId}= req.body;
    const playlist= await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(301).json({Error:"Playlist Didn't Exist"});
    }

    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err:"Not Allowed" });
    }

    const song = await Song.findOne({_id:songId});
    if(!song){
        return res.status(304).json({err: "Song Dosen't Exist"});
    }

    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
});

const getMe = asyncHandler(async (req,res)=>{
    const artistId = req.user._id;
    const playlist = await Playlist.find({owner: artistId}).populate(
        "owner"
    );
    return res.status(200).json({data: playlists});
});


module.exports = {createPlaylist, getPlaylistById, getPlaylistByArtist, addSong, getMe};