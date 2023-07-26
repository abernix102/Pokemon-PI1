import styled from "styled-components";
import complet from "../assets/wave.svg";

export const ContainerAbout = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #fc9c27;

  ::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    top: -13px;
    z-index: 1;
    background-image: url(${complet});
    background-repeat: no-repeat;
    background-size: 90%;
  }
`;

export const ContainAbout = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  z-index: 100;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerFigure = styled.figure`
  width: 25%;
  max-width: 300px;
  flex-shrink: 0;
  img {
    width: 100%;
    display: block;
  }
`;



export const TitleContain = styled.div`
  flex-grow: 1;
  padding: 20px;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
  }
`;
