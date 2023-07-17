import { useEffect, useState } from "react";
import { SectionDetail, ContentImg, ContainerLeft, ContainerRight } from "../styles/detail"
import { useParams } from "react-router-dom";
import axios from "axios"

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

    return (
        <>
            {pokemon.name ? (
                <SectionDetail>
                    <ContainerLeft>
                        <ContentImg><img src={pokemon.image} alt="pokemon" /></ContentImg>
                        <h2>{pokemon.name}</h2>
                        <p>height:{pokemon.height}</p>
                        <p>weight:{pokemon.weight}</p>
                    </ContainerLeft>
                    <ContainerRight>
                        <h2>stands</h2>
                        <h2>more info</h2>
                    </ContainerRight>
                </SectionDetail>
            ) : (
                <h2>cargando</h2>
            )}
        </>
    );
};

export default Detail;
