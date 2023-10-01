const mongoose = require('mongoose');

const songSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required: true,
    },
    track:{
        // will change later
        type:String,
        required: true,
    },
    artist:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
},
{
    timestamps: true,
});

const songModel = mongoose.model("Song", songSchema);

module.exports= songModel;