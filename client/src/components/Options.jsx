import { useSelector, useDispatch } from "react-redux";
import { ContainerOptions } from "../styles/cards";
import { allType, filterType, order, pokemons } from "../redux/actions";
import Search from "./Search";
import { useEffect } from "react";
const Options = ({setCurrentPage}) => {
  const dispatch = useDispatch();
  const options = useSelector(state => state.typeAll);

  useEffect(
    () => {
      dispatch(allType());
    },
    [dispatch]
  );

  const handlerOption = event => {
    dispatch(filterType(event.target.value));
    setCurrentPage(0)
  };
  const handlerOrder = event => {
    dispatch(order(event.target.value))
    setCurrentPage(0)

  }
  const handlerClear = event => {
    event.preventDefault();
    dispatch(pokemons())
    setCurrentPage(0)

  }
  return (
    <ContainerOptions>
      <button onClick={handlerClear}>clear filter</button>
      <select onChange={handlerOption}>
        {options.map(option =>
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        )}
      </select>
      <select onChange={handlerOrder}>
        <option value="a">asendente</option>
        <option value="b">desendete</option>
      </select>
      <Search/>
    </ContainerOptions>
  );
};

export default Options;
