require('dotenv').config();
const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
         });
         console.log("Database connected");
    }catch{
          console.error('Database connection failed:', error.message);
          process.exit(1);
    }
    
};


module.exports=connectDB;