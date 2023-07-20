import { CardsContainer,ContainerImg, LiCont, NameLink} from "../styles/cards";
import useTypeColor from "../hooks/useTypeColors";
const Card = ({id, name, types, image}) => {
  const {color, colors} = useTypeColor(types)
    return (
        <CardsContainer>
          <ContainerImg color={color}>
            <img src={image} alt={name} />
          </ContainerImg>
          <NameLink style={{textDecoration:'none'}} to={`/detail/${id}`}>{name}</NameLink>
          <ul>
            {types?.map((type, index) => (
              <LiCont key={type.name} color={colors?.[index]}>
                {type.name}
              </LiCont>
            ))}
          </ul>
        </CardsContainer>
      );
}

export default Card;