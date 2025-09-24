import axios from 'axios';
export async function createTeamApi({teamName,description,selectedValue}){
    try{
        const token = localStorage.getItem("token");
        const res=await axios.post("http://localhost:5001/api/team",{
            team_name:teamName,
            description:description,
            team_type:selectedValue
        },
        {
                headers: {
                    Authorization: `Bearer ${token}`
                }
        }
    );
        console.log('axios post team create response',res);
        const{team}=res.data;
        return team;
        
    }catch(err){
          console.log(err);
          console.log("Error Creating team",err.response?.data?.message || err.message);
          throw(err);
    }
}