const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    }
    ,
    password:{
        type:String,
        required:true,
        trim:true
    },
    created_at:{
        type:Date,
        default:Date.now(),
    }

});
module.exports=mongoose.model("User",userSchema);
