const axios = require("axios");
const { Pokemon, Type } = require("../db");

const dataApi = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );

  const urlPromises = data.results.map(e => axios.get(e.url));
  const infoUrl = await Promise.all(urlPromises);

  const pokemonDataMap = infoUrl.map(pokemon => ({
    id: pokemon.data.id,
    name: pokemon.data.name,
    image: pokemon.data.sprites.other.dream_world.front_default,
    hp: pokemon.data.stats[0].base_stat,
    attack: pokemon.data.stats[1].base_stat,
    defense: pokemon.data.stats[2].base_stat,
    speed: pokemon.data.stats[5].base_stat,
    height: pokemon.data.height,
    weight: pokemon.data.weight,
    types: pokemon.data.types.map(poke => {
      return { name: poke.type.name };
    })
  }));
  return pokemonDataMap;
};
const dataDb = async () => {
  return await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    ]
  });
};
const dataAll = async () => {
  const [dataApiAll, dataDbAll] = await Promise.all([dataApi(), dataDb()]);
  return [...dataApiAll, ...dataDbAll];
};
module.exports = {
  dataAll
};
