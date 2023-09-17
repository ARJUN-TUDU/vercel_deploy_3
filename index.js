const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(cors(
    {
        origin: ["https://verce-l-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

try{

    mongoose.connect
    ('mongodb+srv://arjuntudu:AnhuN5IU1fO37iWL@cluster0.0ttkmlw.mongodb.net/?retryWrites=true&w=majority');
    console.log("db connection established")

}catch(e){

    if(e){
        console.log("db connection failed");
    }
}


const User = mongoose.model("collection_1",{
    name : String,
    age : Number
})

app.get("/",async (req,res)=>{


    try {
        const data = await User.find();
        res.json(data);
    }catch(err){
        if(err){
            console.log("app get failed")
        }
    }
    
})

app.listen(PORT,(err)=>{

    if(err){
        console.log("app started failed")
    }else{
        console.log("app started")
    }

})