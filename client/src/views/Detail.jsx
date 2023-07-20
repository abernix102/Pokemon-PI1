import { useEffect, useState } from "react";
import { SectionDetail, ContentImg, ContainerLeft, ContainerRight , ContainerAll} from "../styles/detail"
import { useParams } from "react-router-dom";
import axios from "axios"
import Loading from "../components/Loading";

const Detail = () => {
    const [pokemon, setPokemon] = useState({})
    const { id } = useParams();

    const TotalScore = ()=>{
        const total = pokemon.hp + pokemon.attack + pokemon.defense + pokemon.speed;
        return total
    }

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
    console.log(pokemon)
    return (
        <>
            {pokemon.name ? (
                <SectionDetail>
                   <ContainerAll>
                   <ContainerLeft>
                        <ContentImg><img src={pokemon.image} alt="pokemon" /></ContentImg>
                        <h2>{pokemon.name}</h2>
                        <p>height:{pokemon.height}</p>
                        <p>weight:{pokemon.weight}</p>
                        <p>weight:{pokemon.types?.map((e)=> (
                            <p>{e.name}</p>
                        ))}</p>
                    </ContainerLeft>
                    <ContainerRight>
                        <h2>stands</h2>
                        <h3>total({TotalScore()})</h3>
                        <label >hp {pokemon.hp}
                        <progress id="hp" max="225" value={pokemon.hp}>{pokemon.hp}</progress>
                        </label>
                        <label>attack {pokemon.attack}
                        <progress id="attack" max="165" value={pokemon.attack}>{pokemon.attack}</progress>
                        </label>
                        <label>defense {pokemon.defense}
                        <progress id="defense" max="230" value={pokemon.defense}>{pokemon.defense}</progress>
                        </label>
                        <label>speed {pokemon.speed}
                        <progress id="speed" max="160" value={pokemon.speed}>{pokemon.speed}</progress>
                        </label>
                    </ContainerRight>
                   </ContainerAll>
                </SectionDetail>
            ) : (
                <Loading/>
            )}
        </>
    );
};

export default Detail;
