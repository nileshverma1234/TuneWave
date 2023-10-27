const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

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
    password:{
        type:String,
        required: true,
        private:true
    }
},
{
    timestamps: true, 
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const userModel= mongoose.model("User", userSchema);

module.exports = userModel;