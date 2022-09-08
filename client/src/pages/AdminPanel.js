import axios from "axios";
import { useState, useEffect } from "react";
import "../pages/adminPanel.css";

const Home = () => {
  const [form, setForm] = useState();

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/matches/", form).then((resp) => {
      console.log(resp);
      console.log(form);
    });
  };

  return (
    <>
      <div className="adminPanel">
        <div className="matchRegister">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="turnament_name"
              placeholder="Tournament name"
              onChange={handleForm}
            />
            <input type="date" name="match_date" onChange={handleForm} />
            <input
              type="text"
              name="team1"
              placeholder="Team 1 name"
              onChange={handleForm}
            />
            <input
              type="text"
              name="team1_logo"
              placeholder="Team 1 logo"
              onChange={handleForm}
            />
            <input
              type="text"
              name="team2"
              placeholder="Team 2 name"
              onChange={handleForm}
            />
            <input
              type="text"
              name="team2_logo"
              placeholder="Team 2 logo"
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
