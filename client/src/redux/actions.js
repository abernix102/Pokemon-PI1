import { ALLPOKEMONS, ALLTYPE, FILTERTYPES, ORDER } from "./action-types";
import axios from "axios";

export const pokemons = () => async dispatch => {
  const { data } = await axios.get("https://pokemon-pi1-production.up.railway.app/pokemons");
  dispatch({
    type: ALLPOKEMONS,
    payload: data
  });
};
export const createPokemon = (payload) => async (dispatch) => {
  await axios.post("https://pokemon-pi1-production.up.railway.app/pokemon/post", payload);
};
export const allType = () => async dispatch => {
  try {
    const { data } = await axios.get("https://pokemon-pi1-production.up.railway.app/pokemon/type");
    dispatch({
      type: ALLTYPE,
      payload: data
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    // Aquí puedes agregar acciones adicionales en caso de error, como mostrar un mensaje al usuario, etc.
  }
};
export const filterType = (type) => {
  return {type: FILTERTYPES, payload: type}
};
export const order = (payload) => {
  return {type:ORDER, payload:payload}
}