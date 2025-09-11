const User=require('../models/User');
const bcrypt=require('bcryptjs');
const generateToken=require('../utils/generateToken');


//signup controller
const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        //check user exists 
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }

         // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //create user
        const  user=await User.create({name,email,password:hashedPassword});

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
        })
    }catch(err){
         res.status(500).json({ message: "Server error", error: err.message });
    }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User Does not exist.Please signup" });

    const isMatch = await bcrypt.compare(password,user.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email}
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports={registerUser,loginUser};