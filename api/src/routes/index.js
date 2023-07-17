const { Router } = require("express");
const {
  dataPokemons,
  getPokemonById,
  getPokemonsByQuery
} = require("../handlers/pokemons");
const { postPokemont } = require("../handlers/createPokemon");
const { updateTypeData } = require("../handlers/updateType");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router
  .get("/pokemons", dataPokemons)
  .get("/pokemons/:id", getPokemonById)
  .get("/pokemon", getPokemonsByQuery)
  .post("/pokemon/post", postPokemont)
  .get("/pokemon/type", updateTypeData)

module.exports = router;
