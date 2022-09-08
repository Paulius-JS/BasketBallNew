import express from "express";
import cors from "cors";
import session from "express-session";

import matches from "./controller/matches.js";
import pointsTable from "./controller/pointsTable.js";

const app = express();

app.use(cors());

app.use(express.json());

app.set("trust proxy", 1);
app.use(
  session({
    secret: "My top secret phrase",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000000 },
  })
);

app.use(express.urlencoded({ extended: true }));

app.use("/api/matches/", matches);
app.use("/api/pointsTable/", pointsTable);

app.listen(3000);
