import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import Matches from "../model/matches.js";
import PointsTable from "../model/pointsTable.js";

const database = {};
const credentials = {
  host: "localhost",
  user: "root",
  password: "",
  database: "NewBallers",
};

try {
  const connection = await mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
  });

  await connection.query(
    "CREATE DATABASE IF NOT EXISTS " + credentials.database
  );

  const sequelize = new Sequelize(
    credentials.database,
    credentials.user,
    credentials.password,
    { dialect: "mysql" }
  );

  database.Matches = Matches(sequelize);
  database.PointsTable = PointsTable(sequelize);

  database.PointsTable.belongsTo(database.Matches, {
    foreignKey: "match_id",
    as: "match",
  });

  await sequelize.sync({ alter: true });
} catch (error) {
  console.log(error);
  console.log("Error connecting to database");
}

export default database;
