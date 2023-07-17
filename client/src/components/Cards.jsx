import Card from "../components/Card.jsx";
import{ContCards} from "../styles/cards.js"
const Cards = ({pokemonsAll}) => {
    return (
        <ContCards>
            {
                pokemonsAll?.map(({id, name, type, image}) => {
                    return(
                    <Card
                    id={id}
                    key={id}
                    name={name}
                    type={type}
                    image={image}
                    />
                    )
                })
            }
        </ContCards>
    );
}

export default Cards;