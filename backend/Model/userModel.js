const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type:string,
        required:true,
    },
    lastName: {
        type:string,
        required:true,
    },
    email:{
        type: string,
        required: true,
        unique: true,
    },
    userName: {
        type: string,
        required: true,
        unique: true,
    },
    likedSongs: {
        // Need to be changed
        type:string,
        default: "",
    },
    likedPlaylists:{
        // Need To be Changed
        type:string,
        default: "",
    },
    subscribedArtists:{
        // Need To be Changed
        type:string,
        default: "",
    },
});

const userModel= mongoose.model("User", userSchema);

module.exports = userModel;