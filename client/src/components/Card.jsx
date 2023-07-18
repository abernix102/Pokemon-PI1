import ColorDictionary from "../dictionaries/colors";
import { CardsContainer,ContainerImg, LiCont, NameLink} from "../styles/cards";

const Card = ({id, name,type, image}) => {
    const getTypeColor = (types) => {
            const firstColor = types?.[0]?.name;
            return ColorDictionary[firstColor] || "#000"
    }
    
    const getTypeColors = (types) =>{
        return types?.map((type) => {
           return  ColorDictionary[type.name] || "#000"
        })
    }
    
    const cardColor = getTypeColor(type)
    const cardColors = getTypeColors(type)
    return (
        <CardsContainer>
          <ContainerImg color={cardColor}>
            <img src={image} alt={name} />
          </ContainerImg>
          <NameLink style={{textDecoration:'none'}} to={`/detail/${id}`}>{name}</NameLink>
          <ul>
            {type?.map((types, index) => (
              <LiCont key={types.name} color={cardColors?.[index]}>
                {types.name}
              </LiCont>
            ))}
          </ul>
        </CardsContainer>
      );
}

export default Card;