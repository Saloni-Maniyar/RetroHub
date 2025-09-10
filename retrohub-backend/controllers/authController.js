const user=require('../models/User');
const bcrypt=require('bcryptjs');

//signup controller
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        //check user exists
        const userExist=await user.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }

         // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //create user
        const  user=await user.create({name,email,password:hashedPassword});

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
        })
    }catch(err){
         res.status(500).json({ message: "Server error", error: err.message });
    }
};


module.exports={registerUser};