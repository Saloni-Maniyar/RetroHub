import axios from 'axios'
export  async function loginApi({email,password}){
    console.log('In loginApi function');
    try{
        const res=await axios.post("http://localhost:5000/api/auth/login",{
            email:email,
            password:password
        })
        console.log("res after login",res);
        const {token,user}=res.data;

          // Store JWT token in localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          return user;
    }catch(err){
        console.log(err);
        console.log("Error login",err.response?.data?.message || err.message);

        throw(err);
    }
}