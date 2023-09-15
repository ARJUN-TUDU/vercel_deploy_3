const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const app = express();

app.use(cors(
    {
        origin: ["https://verce-l-frontend-ogwop7wdo-arjun-tudu.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
dotenv.config();



try {
    mongoose.connect('mongodb+srv://arjuntudu:Redhawse*1@cluster0.0ttkmlw.mongodb.net/?retryWrites=true&w=majority/db_1')
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