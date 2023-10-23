const asyncHandler = require("express-async-handler");
const Song = require("../Model/songModel");

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
    const songs = await Song.find({artist: req.user._id});
    return res.status(200).json({data:songs});
});

module.exports= {newSong, getSongs};