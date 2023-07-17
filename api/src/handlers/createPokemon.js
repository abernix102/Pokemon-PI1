const { Pokemon, Type} = require("../db");
const { dataAll } = require("../controllers/dataApi");

const postPokemont = async (req, res) => {
  try {
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      type
    } = req.body;
    const allPokemon = await dataAll();
    const findPokemonName = allPokemon.find(poke => poke.name === name.toLowerCase());
    if (findPokemonName) throw Error("the name already exists");
    const pokemonCreate = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    });

  let tipoDb = await Type.findAll({
    where: {
        name: type
    }
  }) 
    pokemonCreate.addType(tipoDb);
    res.status(200).json("successfully created pokemon");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postPokemont
};
