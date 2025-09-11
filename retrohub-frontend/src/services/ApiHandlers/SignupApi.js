import axios from 'axios'
export default async function SignupApi({name,email,password}){
    try{
        const res=await axios.post("http://localhost:5000/api/auth/signup",{
            name:name,
            email:email,
            password:password
        });
        return res.data;
    }catch(err){
        console.error("Error signing up:", err.response?.data?.message || err.message);
        throw err;
    }
       
        
}