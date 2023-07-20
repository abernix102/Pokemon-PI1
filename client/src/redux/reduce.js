import { ALLPOKEMONS, ALLTYPE, FILTERTYPES, ORDER } from "./action-types";

const initialState = {
  pokemons: [],
  pokemonsAll: [], // Agregamos el estado para almacenar todos los pokemones
  typeAll: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALLPOKEMONS:
      return {
        ...state,
        pokemons: payload,
        pokemonsAll: payload // Guardamos todos los pokemones en el estado pokemonsAll
      };
    case ALLTYPE:
      return {
        ...state,
        typeAll: payload
      };
    case FILTERTYPES:
      const filterType = state.pokemonsAll.filter((e) =>
      e.type?.map((e) => e.name).includes(payload)
    );
    return {
      ...state,
      pokemons: filterType
    };
    case ORDER:
      let orderName;
      const desendenteOrder = [...state.pokemons].sort((a, b) => b.name.localeCompare(a.name)); // Creamos una copia del array antes de ordenar
      const asendenteOrder = [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name)); // Creamos una copia del array antes de ordenar
      payload === "a" ? (orderName = asendenteOrder) : (orderName = desendenteOrder);
      return {
        ...state,
        pokemons: orderName
      };
    default:
      return state;
  }
};

export default reducer;
