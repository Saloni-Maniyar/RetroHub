// src/pages/MyTeams.jsx
import { useEffect,useState } from "react";
import TeamCard from "../components/TeamCard";
import "../styles/MyTeams.css";
import { fetchTeam } from "../services/ApiHandlers/fetchTeam";
export default function MyTeams() {
  const [managedTeams,setManagedTeams]=useState([]);
  useEffect(() => {
  const loadTeams=async ()=>{
    try{
       const res=await fetchTeam();
       console.log("fetched data :",res);
       setManagedTeams(res.managedTeams);
       console.log("Managed Teams are: ",managedTeams);
    }catch(err){
      console.log("Error :",err);
      throw err;
    }
   
  };
  loadTeams();
  


},[]);
  // dummy data 
 
//  const managedTeams = [
//   { teamId: "1", team_name: "Alpha Squad", description: "Handles core dev work", team_type: "organizational", members_count: 12 },
//   { teamId: "2", team_name: "Study Group", description: "Semester 3 prep", team_type: "college", members_count: 5 }
// ];

const participatedTeams = [
  { teamId: "3", team_name: "Hackathon Crew", description: "Weekend coding events", team_type: "personal", members_count: 8 },
  { teamId: "4", team_name: "Sports Team", description: "Annual sports fest", team_type: "college", members_count: 15 }
];


  return (
    <div className="my-teams-page">
      {/* Managed Teams Section */}
      <section className="teams-section">
        <h2 className="section-title">Teams Managed by Me</h2>
        <div className="teams-list">
          {managedTeams.map((tm, idx) => (
            
            <TeamCard key={idx} team={tm.team} />
            
          ))}
        </div>
      </section>

      {/* Participated Teams Section */}
      <section className="teams-section">
        <h2 className="section-title">Teams I’m a Member Of</h2>
        <div className="teams-list">
          {participatedTeams.map((team, idx) => (
            <TeamCard key={idx} team={team} />
          ))}
        </div>
      </section>
    </div>
  );
}
