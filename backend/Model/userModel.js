const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    likedSongs: {
        // Need to be changed
        type:String,
        default: "",
    },
    likedPlaylists:{
        // Need To be Changed
        type:String,
        default: "",
    },
    subscribedArtists:{
        // Need To be Changed
        type:String,
        default: "",
    },
});

const userModel= mongoose.model("User", userSchema);

module.exports = userModel;