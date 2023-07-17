import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
  background-color: #41abf3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 100px 20px;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;
export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
export const ContCards = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const CardsContainer = styled.div`
  background-color: #fff;
  overflow: hidden;
  object-fit: contain;
  display: flex;
  padding: 20px 0;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  text-transform: capitalize;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    width: 10%;
    gap: 20px;
    font-weight: bold;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
`;

export const NameLink = styled(Link)`
 margin: 0;
 color: #000;
    font-weight: bold;
    font-size: 1.8rem;
`;

export const LiCont = styled.li`
  background-color: ${props => props.color || "red"};
  border-radius: 10px;
  padding: 5px 20px;
  text-shadow: 1px 0px 0px black, 0px 1px 0px black, -1px 0px 0px black,
    0px -1px 0px black;
`;
export const ContainerImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    z-index: 1;
  }
  ::before {
    content: '';
    position: absolute;
    width: 45%;
    padding: 40px;
    height: 170%;
    rotate: calc(90deg);
    background-color: ${props => props.color || "red"};
    border-radius: 0 50% 50% 0;
    top: -154px;
    right: 15px;
    z-index: 0;
  }
`;
export const PageStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding-bottom: 20px;
  button {
    border-radius: 10px;
    padding: 5px 10px;
  }
`;
