import { PageStyle , ContainerWrapper} from "../styles/cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.svg";
import arrowPrev from "../assets/arrowPrev.svg";
import { pokemons, allType } from "../redux/actions";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Options from "../components/Options";
const itemsPage = 10;
const CardsPokemon = () => {
  const pokemonsAlls = useSelector(state => state.pokemons);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(allType());
      dispatch(pokemons()).then(() => setIsLoading(false)).catch(error => {
        console.error("Error fetching pokemons:", error);
        setIsLoading(true);
      });
    },
    [dispatch]
  );
  const startIndex = currentPage * itemsPage;
  const endIndex = startIndex + itemsPage;
  const currenItems = pokemonsAlls.slice(startIndex, endIndex);
  const handlerNextPage = () => {
    const totalPage = Math.ceil(pokemonsAlls.length / itemsPage);
    if (currentPage < totalPage - 1) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };
  const handlerPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };
  const totalPages = Math.ceil(pokemonsAlls.length / itemsPage);

  return (
    <>
    {isLoading ? <Loading/> :
          <ContainerWrapper>
          <Options setCurrentPage={setCurrentPage}/>
            <Cards pokemonsAll={currenItems} />
            <PageStyle>
              <button onClick={handlerPrevPage} disabled={currentPage === 0}>
                <img src={arrowPrev} alt="Arrow" width={15} />
              </button>
              <h2>
                {currentPage} de {totalPages}
              </h2>
              <button
                onClick={handlerNextPage}
                disabled={currentPage > totalPages - 1}
              >
                <img src={arrow} alt="Arrow" width={15} />
              </button>
            </PageStyle>
          </ContainerWrapper>
}
    </>
  );
};

export default CardsPokemon;
