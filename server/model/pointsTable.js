import { DataTypes } from "sequelize";

const PointsTable = (sequelize) => {
  const Schema = {
    team_points: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    team_scored: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  };
  return sequelize.define("pointsTable", Schema);
};

export default PointsTable;
