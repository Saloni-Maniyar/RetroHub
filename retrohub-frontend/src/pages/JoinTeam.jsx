import { useEffect, useState, useContext } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import { joinTeam } from "../services/ApiHandlers/JoinTeamApi";
export default function JoinTeam(){
    const { teamId } = useParams();
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [status, setStatus] = useState("checking");

    useEffect(()=>{
        const checkJoin=async ()=>{
            const res=await joinTeam(teamId,email,token);
            console.log(res);
              if (res.success && res.joinedNow) {
                  setStatus("joined");
                  setTimeout(() => navigate("/myteams"), 1500);
              } else if (res.userNotFound) {
                      sessionStorage.setItem("inviteTeamId", teamId);
                      sessionStorage.setItem("inviteEmail", email);
                     navigate(`/signup?email=${email}&teamId=${teamId}`);
             }else if (res.needLogin || (res.alreadyMember && !res.isLoggedIn)) {
              sessionStorage.setItem("inviteTeamId", teamId);
              sessionStorage.setItem("inviteEmail", email);
             navigate(`/login?email=${email}&teamId=${teamId}`);
            } else if (res.alreadyMember) {
                    setStatus("already");
                    setTimeout(() => navigate("/myteams"), 1500);
            }else if (!res.success && res.message === "Team not found") {
              setStatus("notFound");
              setTimeout(()=> navigate("/"),1500);
             
        } else {
                    setStatus("error");
            }
        };
        checkJoin();
    },[teamId, email, token, navigate]);
     return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "checking" && <p>Checking your invite...</p>}
      {status === "joined" && <p> You’ve successfully joined the team!</p>}
      {status === "already" && <p> You’re already a member of this team.</p>}
      {status === "error" && <p> Something went wrong. Please try again.</p>}
      {status === "notFound" && <p>Team Not Found!!!</p>}
    </div>
  );

}

