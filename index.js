const express=require("express");
const app=express();

 require("dotenv").config();
 const PORT=process.env.PORT || 4000;

 //it is middleware
 app.use(express.json());
const fileupload=require("express-fileupload");
 app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
})); ///server upload directlty

//connecting to db
 const db=require("./config/database");
 db.connect();

//connecting to db
 const cloudinary=require("./config/cloudinary")
cloudinary.cloudinaryConnect();
//mounting api
const Upload=require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);
//serverr activated
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})