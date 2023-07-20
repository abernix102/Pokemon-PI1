import { useState, useEffect } from "react";
import Validation from "../validations/validations.js";
import { createPokemon } from "../redux/actions.js";
import { useSelector, useDispatch } from "react-redux";
import { Conteinlabel, ContainerSelect } from "../styles/formulario";
import { useNavigate } from "react-router-dom";
import { allType } from "../redux/actions.js";
function FormData() {
  const navigate = useNavigate();
  const types = useSelector(state => state.typeAll);
  const [options1, options2] = [types.slice(0, 10), types.slice(10, 20)];
  const dispatch = useDispatch();
  const [allErrors, setAllErrors] = useState(true);
  const [userError, setUserError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    hp: 0,
    image:"",
    attack: 0,
    defense:0,
    speed: 0,
    height:0,
    weight: 0,
    types: []
  });
  const [errors, setErrors] = useState({
    name: { value: "", error: false },
    hp: { value: "", error: false },
    attack: { value: "", error: false },
    defense: { value: "", error: false },
    speed: { value: "", error: false },
    height: { value: "", error: false },
    weight: { value: "", error: false },
    type: { value: "", error: false }
  });
  const handleNumberChange = event => {
    const { name, value } = event.target;
    const numericValue = parseInt(value, 10);
    setUser({ ...user, [name]: numericValue });
    setErrors({ ...errors, [name]: Validation(name, numericValue) });
  }; 
  const handlerOnchageString = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: Validation(name, value) });
  };
  const handleSelectChange = event => {
    const { value } = event.target;
    const selectedOptions = user.types.includes(value)
      ? user.types.filter(type => type !== value)
      : [...user.types, value].slice(-2);

    setUser({ ...user, types: selectedOptions });
  };
console.log(user)
  const renderError = fieldName => {
    if (errors[fieldName].error) {
      return (
        <p>
          {errors[fieldName].value}
        </p>
      );
    } 
    return null;
  };

  useEffect(() => {
    const errorUser =
      Object.values(user).some(users => users === "") ||
      (Array.isArray(user.types) && user.types.length === 0);
    setUserError(errorUser);
    const hasErrors = Object.values(errors).some(obj => obj.error === true);
    setAllErrors(hasErrors);
    dispatch(allType());
  }, [dispatch, user, errors]);

  const handleSubmit = event => {
    event.preventDefault();
    if (userError) {
      setAllErrors(true);
    } else {
      navigate("/");
      dispatch(createPokemon(user));
    }
  };
  return (
    <Conteinlabel onSubmit={handleSubmit}>
      <label htmlFor="name">
        name:
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handlerOnchageString}
        />
      </label>
      {renderError("name")}
      <label htmlFor="image">
        image:
        <input type ="text" name="image" id="image" value={user.image} onChange={handlerOnchageString} />
      </label>
      <label htmlFor="hp">
        hp:
        <input
          type="number"
          id="hp"
          name="hp"
          value={user.hp}
          onChange={handleNumberChange}
        />
      </label>
      {renderError("hp")}
      <label htmlFor="attack">
        attack:
        <input
          type="number"
          id="attack"
          name="attack"
          value={user.attack}
          onChange={handleNumberChange}
          max="165"
        />
      </label>
      {renderError("attack")}
      <label htmlFor="defense">
        defense:
        <input
          type="number"
          id="defense"
          name="defense"
          value={user.defense}
          onChange={handleNumberChange}
          max="230"
        />
      </label>
      {renderError("defense")}
      <label htmlFor="speed">
        speed:
        <input
          type="number"
          id="speed"
          name="speed"
          value={user.speed}
          max="160"
          onChange={handleNumberChange}
        />
      </label>
      {renderError("speed")}
      <label htmlFor="height">
        height:
        <input
          type="number"
          id="height"
          name="height"
          value={user.height}
          max="145"
          onChange={handleNumberChange}
        />
      </label>
      {renderError("height")}
      <label htmlFor="weight">
        weight:
        <input
          type="number"
          id="weight"
          name="weight"
          value={user.weight}
          max=" 9500"
          onChange={handleNumberChange}
        />
      </label>
      {renderError("weight")}
   <ContainerSelect>
   <select onChange={handleSelectChange}>
        <option>seleccione un option</option>
        {options1.map(option =>
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        )}
      </select>
      <select onChange={handleSelectChange}>
        <option>seleccione un option</option>
        {options2.map(option =>
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        )}
      </select>
   </ContainerSelect>
      <button type="submit" disabled={allErrors}>
        Submit
      </button>
      {allErrors ? <p>completar todos los campos</p> : ""}
    </Conteinlabel>
  );
}

export default FormData;
