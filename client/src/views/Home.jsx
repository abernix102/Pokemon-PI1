import {ContainerSection, ContainerTitle, Container, ContainerImg, BlobSvg, Pokeball, TitleFond} from "../styles/home"
import charizard from "../assets/pngwing.com (2).png"
import About from "../components/About";
const Home =  () => {
    return (
        <div>
            <ContainerSection>
            <TitleFond>ポケモン</TitleFond>
            <Pokeball></Pokeball>
            <BlobSvg></BlobSvg>
           <Container>
           <ContainerTitle >
            <h1>who's that pokémon</h1>
            <h2>look for all the pokemons in this web page and all their types</h2>
            <button>let's go</button>
            </ContainerTitle>
            <ContainerImg>
            <img src={charizard} alt="pokemon-home" />
            </ContainerImg>
           </Container>
        </ContainerSection>
        <About/>
        </div>
    );
}

export default Home;