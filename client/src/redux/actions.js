import { ALLPOKEMONS, ALLTYPE, FILTERTYPES, ORDER } from "./action-types";
import axios from "axios";

export const pokemons = () => async dispatch => {
  const { data } = await axios.get("http://localhost:3001/pokemons");
  dispatch({
    type: ALLPOKEMONS,
    payload: data
  });
};
export const createPokemon = (payload) => async (dispatch) => {
  await axios.post("http://localhost:3001/pokemon/post", payload);
};
export const allType = () => async dispatch => {
  const { data } = await axios.get("http://localhost:3001/pokemon/type");
  dispatch({
    type: ALLTYPE,
    payload:data
  })
}
export const filterType = (type) => {
  return {type: FILTERTYPES, payload: type}
};
export const order = (payload) => {
  return {type:ORDER, payload:payload}
}