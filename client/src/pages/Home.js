import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import versusImg from "../assets/versus.png";

const Home = () => {
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

  return (
    <>
      <div className="playWindow">
        {matches.map(
          (match) =>
            match.match_ended && (
              <>
                <div key={match.id} className="match">
                  <div className="teamInfo">
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

      <>
        <div className="endedMatchesTable">
          <table className="customTable">
            <thead>
              <tr>
                <th>Tournament</th>
                <th>Play date</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {matches.map(
                (match) =>
                  !match.match_ended && (
                    <tr>
                      <td>{match.turnament_name}</td>
                      <td>{match.match_date}</td>
                      <td className="singleTeamTable">
                        {match.team1} <img src={match.team1_logo} alt="" />
                      </td>
                      <td className="singleTeamTable">
                        {match.team2} <img src={match.team2_logo} alt="" />
                      </td>
                      <td>
                        {match.team1_score} - {match.team2_score}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default Home;
