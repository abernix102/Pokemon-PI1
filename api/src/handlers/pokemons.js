const { dataAll } = require("../controllers/dataApi");

const dataPokemons = async (req, res) => {
  try {
    const data = await dataAll();
    if (!data) throw new Error("error sending data");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemonsTotal = await dataAll();
    let pokemon;

    const isNumber = !isNaN(id);
    if (isNumber) {
      pokemon = pokemonsTotal.find(e => e.id == id);
    } else {
      pokemon = pokemonsTotal.find(
        e => e.name.toLowerCase() === id.toLowerCase()
      );
    }
    if (!pokemon) {
      pokemon = pokemonsTotal.find(e => e.id.toString() == id.toLowerCase());
    }

    if (!pokemon) throw new Error("Pokemon not found");
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPokemonsByQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const pokemonsTotal = await dataAll();
    const pokemonsFind = pokemonsTotal.find(
      poke => poke.name.toLowerCase() === name.toLowerCase()
    );
    if (!pokemonsFind) throw new Error("pokemon name not found");
    res.status(200).json(pokemonsFind);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  dataPokemons,
  getPokemonById,
  getPokemonsByQuery
};
