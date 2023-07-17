const { default: axios } = require("axios");
const {Type} = require("../db");
const { where } = require("sequelize");

const updateTypeData = async (req, res) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    const types = data.results.map(e => ({ name: e.name })); //el uso de () es para indicar que es un obj literal y no un bloque de codigo al iterarlo
    types.forEach(element => {
        Type.findOrCreate({
            where: {
                name: element.name,
              },
        })
    });
    const typesAll = await Type.findAll(
      {attributes:['name']}
    )
    res.status(200).json(typesAll);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  updateTypeData
};
