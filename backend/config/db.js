const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(
            process.env.MongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`MongoDB connected Sucessfully : ${conn.connection.host}`);
    } catch(error){
        console.log(`Error Encountered : ${error.message}`);
        process.exit(1);
    }
}

module.exports=connectDB;