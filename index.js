const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const app = express();

app.use(cors(
    {
        origin: ["http://localhost:3000/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI


try {
    mongoose.connect(MONGODB_URI)
}catch(err){
    console.log("mongoose connection error")
}


if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
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