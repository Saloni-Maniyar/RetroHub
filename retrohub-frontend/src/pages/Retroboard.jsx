// src/pages/Retroboard.jsx
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Retroboard.css";
import { MessageSquare } from "lucide-react"; // discussion icon

export default function Retroboard() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const handleDiscussionClick = () => {
    navigate(`/teams/${teamId}/discussion/1`); // dummy discussion id
  };

  return (
    <div className="retroboard">
      <h2 className="retroboard-title">Retroboard for Team {teamId}</h2>
      <div className="retroboard-columns">
        {/* Column 1: What is Good */}
        <div className="retro-column">
          <h3 className="column-title">What is Good</h3>
          <button className="add-btn">+ Add</button>
          {/* Example response card */}
          <div className="response-card">
            <p>Team collaboration is awesome!</p>
            <MessageSquare
              className="discussion-icon"
              onClick={handleDiscussionClick}
              title="Go to Discussion"
            />
          </div>
        </div>

        {/* Column 2: What is Bad */}
        <div className="retro-column">
          <h3 className="column-title">What is Bad</h3>
          <button className="add-btn">+ Add</button>
        </div>

        {/* Column 3: What to Improve */}
        <div className="retro-column">
          <h3 className="column-title">What to Improve</h3>
          <button className="add-btn">+ Add</button>
        </div>
      </div>
    </div>
  );
}
