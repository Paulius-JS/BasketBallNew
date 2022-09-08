import axios from "axios";
import { useState, useEffect } from "react";
import "../pages/adminPanel.css";
import versusImg from "../assets/versus.png";

const Home = () => {
  const [form, setForm] = useState();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("/api/matches")
      .then((resp) => {
        setMatches(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/pointsTable/", form).then((resp) => {});
  };

  return (
    <>
      <div className="activeMatches">
        {matches.map(
          (match) =>
            match.match_ended && (
              <>
                <div key={match.id} className="match">
                  <div className="teamInfo">
                    <span>{match.id}</span>
                    <span className="teamName">{match.team1}</span>
                    <img src={match.team1_logo} alt={match.team1} />
                  </div>
                  <div className="scores">
                    <span className="scoresNumbers">{match.team1_score}</span>
                    <div className="versus">
                      <img src={versusImg} alt="logo" />
                    </div>
                    <span className="scoresNumbers">{match.team2_score}</span>
                  </div>
                  <div className="teamInfo">
                    <span className="teamName">{match.team2}</span>
                    <img src={match.team2_logo} alt={match.team2} />
                  </div>
                </div>
              </>
            )
        )}
      </div>

      <div className="adminPanel">
        <div className="matchRegister">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="match_id"
              placeholder="match_id"
              onChange={handleForm}
            />
            <input
              type="number"
              name="team_points"
              placeholder="points"
              onChange={handleForm}
            />
            <input
              type="number"
              name="team_scored"
              placeholder="team_scored"
              onChange={handleForm}
            />

            <button>Add match</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
