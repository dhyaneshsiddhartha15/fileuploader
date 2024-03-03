const mongoose=require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{

    })
    .then(console.log("DB CONNECTION SUCCESSFULL"))
    .catch((error)=>{
        console.log("DB Connection Issues");
        console.log(error);
        process.exit(1);
    })
}