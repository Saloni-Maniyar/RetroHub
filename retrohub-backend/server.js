require('dotenv').config();

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const connectDB = require('./config/db');
const app=express();
const PORT = process.env.PORT || 5000;



const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions));

app.use(express.json())
//to get body parameters
app.use(express.urlencoded({ extended: true }));


//routes
const authRoutes=require('./routes/authRoutes');
app.use('/api/auth',authRoutes);

connectDB();//call to mongoose.connecet in config/db.js
  
// Basic route for testing
        app.get('/', (req, res) => {
            res.send('Backend server is running!');
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });