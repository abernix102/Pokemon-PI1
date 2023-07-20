import ColorDictionary from "../dictionaries/colors";
import { CardsContainer,ContainerImg, LiCont, NameLink} from "../styles/cards";

const Card = ({id, name, types, image}) => {
  console.log(id,name, types, image);
    const getTypeColor = (types) => {
            const firstColor = types?.[0]?.name;
            return ColorDictionary[firstColor] || "#000"
    }
    
    const getTypeColors = (types) =>{
        return types?.map((type) => {
           return  ColorDictionary[type.name] || "#000"
        })
    }
    
    const cardColor = getTypeColor(types)
    const cardColors = getTypeColors(types)
    return (
        <CardsContainer>
          <ContainerImg color={cardColor}>
            <img src={image} alt={name} />
          </ContainerImg>
          <NameLink style={{textDecoration:'none'}} to={`/detail/${id}`}>{name}</NameLink>
          <ul>
            {types?.map((type, index) => (
              <LiCont key={type.name} color={cardColors?.[index]}>
                {type.name}
              </LiCont>
            ))}
          </ul>
        </CardsContainer>
      );
}

export default Card;