import styled, { keyframes } from "styled-components";
import wave from "../assets/wave-haikei.svg";
import ve from "../assets/a.svg";
import blob from "../assets/blob3.svg";
import pokeball from "../assets/pokeball.png";

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px); 
  }
  100% {
    transform: translateY(0);
  }
`;
const moveDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const Pokeball = styled.div`
  left: 0%;
  bottom: -5px;
  position: absolute;
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-size: 50%;
  width: 200px;
  height: 220px;
  background-position: center;
  animation: ${moveUp} 5s infinite alternate, ${moveDown} 5s infinite alternate;
`;

export const ContainerSection = styled.section`
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    left: -50px;
    top: -74px;
    content: "";
    position: absolute;
    background-image: url(${ve});
    width: 200px;
    height: 220px;
    background-size: cover;
    background-position: center;
  }
`;
export const TitleFond = styled.div`
  position: absolute;
  color: #0c0d0e4a;
  font-size: 19vw;
  font-weight: bold;
  top: -5px;
  left: 80px;
`;
export const BlobSvg = styled.div`
  left: 93%;
  bottom: -15px;
  position: absolute;
  background-image: url(${blob});
  width: 200px;
  height: 220px;
  background-size: cover;
  background-position: center;
`;
export const ContainerTitle = styled.div`
  display: flex;
  width: 50%;
  z-index: 10;
  font-weight: bold;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: #fff;
  text-transform: capitalize;
  h1 {
    font-size: 4em;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    margin: 10px 0;
  }
  button {
    text-transform: capitalize;
    margin-top: 20px;
    font-weight: unset;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #000;
    padding: 15px 39px;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2em; /* Tamaño de fuente más pequeño para resoluciones más pequeñas */
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  width: 90%;
`;

export const ContainerImg = styled.div`
  position: relative;
  width: 30%;
  img {
    width: 100%;
    display: block;
  }
  ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: 80%;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    transform: translateY(50%);
  }
`;
