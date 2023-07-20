import { useSelector } from "react-redux";
import { useState } from "react";
import {Barra, FormName} from "../styles/search"
import { useNavigate } from "react-router-dom";
const  Search = () => {
    const navegate = useNavigate()
    const poke = useSelector((state) => state.pokemonReadOnly)
    const [inputValue, setInputValue] = useState("");
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleClick = (searchTerm) => {
        setInputValue(searchTerm);
      };
    const handlerSubmit = (event) =>{
        event.preventDefault()
        navegate(`/detail/${inputValue}`)
    }
    return (
        <FormName style={{position:"relative"}} onSubmit={handlerSubmit}>
            <button>+</button>
            <input  type="search" name="search" id="search" onChange={handleChange} value={inputValue}/>
            <Barra style={{position:"absolute"}}>{poke?.filter((item) => {
            const searchTerm = inputValue.toLowerCase();
            const fullName = item.name.toLowerCase();
            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          }).map((e) => (
            <div  style={{cursor:"pointer"}} key={e.name} onClick={()=>handleClick(e.name)}>{e.name}</div>
          ))}</Barra>
        </FormName>
    );
}

export default Search;