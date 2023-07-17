const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  sequelize.define(
    "type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
};
