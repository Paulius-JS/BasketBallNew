import express from "express";
import db from "../database/connect.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const matches = await db.Matches.findAll();
    res.status(200).send(matches);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

router.post("/", async (req, res) => {
  try {
    await db.Matches.create(req.body);
    res.status(200).send("Match added");
  } catch (error) {
    console.log(error);
    res.status(400).send("error klaida");
  }
});

export default router;
