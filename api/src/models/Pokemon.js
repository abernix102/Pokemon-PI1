const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      hp: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      },
      attack: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      },
      defense: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      },
      speed: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      },
      height: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      },
      weight: {
        type: DataTypes.INTEGER,
        defaultValue: 50
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
};
