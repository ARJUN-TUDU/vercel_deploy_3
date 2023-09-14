const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const app = express();
app.use(cors());

dotenv.config();

const MONGODB = process.env.MONGODB


try {
    mongoose.connect(MONGODB)
}catch(err){
    console.log("mongoose connection error")
}


const User = mongoose.model("collection_1",{
   
    name : String,
    age : Number

})




app.use("/",async (req,res)=>{
   
     try {

        const data =  await User.find();
        res.json(data);

  
     }catch(e){

        console.log(" getting data error ")
        
     }

})


app.listen(9000,(err)=>{

    if(err){
        console.log("error starting")
    }else{
        console.log("app started")
    }

})