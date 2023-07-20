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
      types
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

  let tipos = await Type.findAll({
    where: {
        name: types
    }
  }) 
  pokemonCreate.addType(tipos)
    res.status(200).json("successfully created pokemon");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postPokemont
};
