import { DataTypes } from "sequelize";

const Matches = (sequelize) => {
  const Schema = {
    turnament_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    match_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    match_ended: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    team1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team1_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team2_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team1_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    team2_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

  return sequelize.define("matches", Schema);
};

export default Matches;
