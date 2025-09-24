
import "../styles/TeamCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {UsersRound,UserRoundPlus,MoveUpRight} from "lucide-react";

export default function TeamCard({ team }) {
  return (
     <Link to={`/teams/${team.teamId}/retroboard`} className="team-card-link">
      <div className="team-card">
        <h3 className="team-name">{team.team_name}</h3>
        <div className="team-type">
           <p>{team.team_type}</p>
        </div>
        <p className="team-description">{team.description}</p>
        <div className="team-members">
             
           <span><UsersRound className="icon"/></span>  <span className="team-member-text"> {team.members_count} Members</span>
        </div>
       <div className="buttons">
            <button><span>Boards</span> <MoveUpRight className="icon" /> </button>
            <button><span>Add members</span> <UserRoundPlus className="icon" /></button>
       </div>

      </div>
    </Link>
  );
}
TeamCard.propTypes = {
  team: PropTypes.shape({
    teamId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    team_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    team_type: PropTypes.string,
    members_count: PropTypes.number
  }).isRequired
};