import express from "express";
import db from "../database/connect.js";
import sequelize from "sequelize";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const totalAmount = await db.PointsTable.findAll({
      attributes: [
        "team_name",
        [sequelize.fn("sum", sequelize.col("team_points")), "total_amount"],
      ],
      group: ["team_name"],
    });
    // console.log(totalAmount);
    res.status(200).send(totalAmount);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const addScore = await db.PointsTable.create({
      team_points: req.body.team_points,
      match_id: req.body.match_id,
      team_scored: req.body.team_scored,
    });
    const teamName = "team" + req.body.team_scored + "_score";
    const match = await db.Matches.findByPk(req.body.match_id);
    match[teamName] != null ? parseInt(match[teamName]) : 0;
    await match.update({
      [teamName]: match[teamName] + parseInt(req.body.team_points),
    });
    res.status(200).send(addScore);
  } catch (error) {
    console.log(error);
    res.status(400).send("error klaida");
  }
});

export default router;
