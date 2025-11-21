import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export async function joinTeam(teamId, email, token = null) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await axios.post(
      `${API}/join-team`,
      { teamId, email },
      { headers }
    );

    return res.data;
  } catch (err) {
    console.error("Error in joinTeamApi:", err);
    return { success: false, message: err.response?.data?.message || "Error" };
  }
}




// import axios from 'axios';
// export async function joinTeam(teamId,email,token=null){
//     console.log("In join team api");
//     try{
//          const headers = token ? { Authorization: `Bearer ${token}` }:{}; // include token only if user logged in
        
//          const res = await axios.post(
//                 `http://localhost:5001/api/join-team`,
//                  {teamId, email },
//                 { headers }
//         );
//         console.log("response from backend: join team",res);

//         return res.data;
//     }catch(err){
//         console.error("Error in joinTeamApi:", err);
//         return { success: false, message: err.response?.data?.message || "Error" };
//     }
// }