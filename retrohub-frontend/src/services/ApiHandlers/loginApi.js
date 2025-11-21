import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export async function loginApi({ email, password, teamId }) {
  try {
    const res = await axios.post(`${API}/auth/login`, {
      email,
      password,
      teamId
    });

    const { token, user } = res.data;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));

    return res.data;

  } catch (err) {
    console.log("Error login", err.response?.data?.message || err.message);
    throw err;
  }
}


// import axios from 'axios'
// export  async function loginApi({email,password,teamId}){
//     console.log('In loginApi function');
//     console.log("teamid in loginApi function:",teamId);
//     try{
//         console.log("trying to log in");
//         const res=await axios.post("http://localhost:5001/api/auth/login",{
//             email:email,
//             password:password,
//             teamId:teamId
//         })
//         console.log("res after login",res);
//         const {token,user}=res.data;

//           // Store JWT token in localStorage
//           sessionStorage.setItem("token", token);
//           sessionStorage.setItem("user", JSON.stringify(user));

//           return res.data;
//     }catch(err){
//         console.log(err);
//         console.log("Error login",err.response?.data?.message || err.message);

//         throw(err);
//     }
// }