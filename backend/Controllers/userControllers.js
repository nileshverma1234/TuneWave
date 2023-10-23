const asyncHandler = require("express-async-handler");
const User = require('../Model/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req,res)=>{
    const {firstName, lastName, email, userName, password} = req.body;
    
    if(!firstName || !lastName || !email || !userName){
        res.status(400).json({error:"Every frild is required"});
    }

    const userExist =await User.findOne({email:email});
    if(userExist){
        res.status(400).json({error:"User Already exist with this email"});
    }

    const usernameExist =await User.findOne({userName:userName});
    if(usernameExist){
        res.status(400).json({error:"UserName Already exist please try another Username"});
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        userName,
        password,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Failed To create the User");
    }
});


const authUser = asyncHandler(async (req, res)=>{
    const {email, password}=req.body;

    const user = await User.findOne({email:email});

    if(user && (await user.matchPassword(password))){
        res.status(202).json({
            _id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
            token: generateToken(user._id)
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid Email Or Password");
    }
});

module.exports= {registerUser,authUser};