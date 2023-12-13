const asyncHandler = require("express-async-handler");
const Song = require("../Model/songModel");
const User = require("../Model/userModel");

const newSong = asyncHandler(async (req,res)=>{
    const {name, thumbnail,track}= req.body;

    if(!name || !thumbnail || !track){
        return res.status(300).json({err:"Insufficient details to create Song."});
    }
    const artist= req.user._id;
    const songDetails= {name, thumbnail, track, artist};
    const createdSong= await Song.create(songDetails);
    return res.status(200).json(createdSong);
}); 

const getSongs = asyncHandler(async (req, res)=>{
    const currentUser= req.user;
    const songs = await Song.find({artist: req.user._id}).populate("artist");
    return res.status(200).json({data:songs});
});

const getSongsByArtist = asyncHandler(async (req, res)=>{
    const {artistId}=req.params;
    const artist = await User.findOne({_id:artistId});
    if (!artist) {
        return res.status(301).json({Error:"Artist Does Not Exist"});
    }
    const songs = await Song.find({artist:artistId});
    return res.status(200).json({data:songs});
});

const getSongsByName= asyncHandler(async (req,res)=>{
    const {songName} =req.params;

    // Do pattern matching here using Mongo Db
    const song = await Song.find({name:songName});
    return res.status(200).json({Data:song});
});

module.exports= {newSong, getSongs, getSongsByArtist, getSongsByName};