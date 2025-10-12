import axios from 'axios';
export async function joinTeam(teamId,email,token=null){
    try{
         const headers = token ? { Authorization: `Bearer ${token}` }:{}; // include token only if user logged in

         const res = await axios.post(
                `http://localhost:5001/api/join-team`,
                 {teamId, email },
                { headers }
        );

        return res.data;
    }catch(err){
        console.error("Error in joinTeamApi:", err);
        return { success: false, message: err.response?.data?.message || "Error" };
    }
}