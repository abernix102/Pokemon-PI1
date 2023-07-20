import { useEffect, useState } from "react";
import { SectionDetail, ContentImg, ContainerLeft, ContainerRight, ContainerAll, TypesSPan, ContentTitle, InPokemon, Contenedor } from "../styles/detail"
import { useParams } from "react-router-dom";
import iconBack from "../assets/icons8-back-64.png"
import { ButtomBack } from "../styles/formulario";
import axios from "axios"
import Loading from "../components/Loading";
import useTypeColors from "../hooks/useTypeColors";
const Detail = () => {
    const [pokemon, setPokemon] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/pokemons/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setPokemon(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });

        return setPokemon({});
    }, [id]);
    console.log(pokemon.types)
    const { colors, color } = useTypeColors(pokemon.types);
    const TotalScore = () => {
        const total = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.speed;
        return total
    }
  const handlerClick = () => {
    window.history.back();
  }

    return (
        <>
            {pokemon.name ? (
                <SectionDetail>
                    <ContainerAll color={color}>
                        <ContainerLeft>
                            <ContentImg><img src={pokemon.image} alt="pokemon" /></ContentImg>
                            <Contenedor>
                            <ContentTitle>
                                <h2>{pokemon.name}</h2>
                                {pokemon.types?.map((e, index) => (<TypesSPan key={e.name} color={colors?.[index]}>{e.name}</TypesSPan>))}
                            </ContentTitle>
                            <InPokemon>
                                <p>height: <span>{pokemon.height}</span></p>
                                <p>weight: <span>{pokemon.weight}</span></p>
                            </InPokemon>
                            </Contenedor>
                        </ContainerLeft>
                        <ContainerRight>
                            <h2>stands</h2>
                            <h3>total({TotalScore()})</h3>
                            <label>hp <span>{pokemon.hp}</span></label>
                            <progress id="hp" max="225" value={pokemon.hp}></progress>
                            <label>attack <span>{pokemon.attack}</span></label>
                            <progress id="attack" max="165" value={pokemon.attack}></progress>
                            <label>defense <span>{pokemon.defense}</span></label>
                            <progress id="defense" max="230" value={pokemon.defense}></progress>
                            <label>speed <span>{pokemon.speed}</span></label>
                            <progress id="speed" max="160" value={pokemon.speed}></progress>
                        </ContainerRight>
                    </ContainerAll>
                    <ButtomBack onClick={handlerClick}><img src={iconBack} alt="icon_back" /></ButtomBack>
                </SectionDetail>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Detail;
