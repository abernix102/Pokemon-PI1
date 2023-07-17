import {ContainerNav,ButtonContainer, ContainerList, NavList, LinkBar} from "../styles/navbar"
import pokemonLogo from "../assets/pngwing.com (1).png";
const NavBar = () => {
  return (
    <ContainerList>
      <ContainerNav>
        <ButtonContainer to="/">
          <img src={pokemonLogo} alt="pokemon-logo" />
        </ButtonContainer>
        <NavList>
          <li>
            <LinkBar to="/">Home</LinkBar>
          </li>
          <li>
            <LinkBar to="/Cards">pokemons</LinkBar>
          </li>
          <li>
            <LinkBar to="/create">create pokemon</LinkBar>
          </li>
        </NavList>
      </ContainerNav>
    </ContainerList>
  );
};

export default NavBar;
