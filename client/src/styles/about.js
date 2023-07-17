import styled from "styled-components"
import complet from "../assets/wave.svg"
import second from "../assets/Diglett-Pokemon-No-Background.png"
export const ContainerAbout = styled.section `
 height: 100vh;
 width: 100%;
 position: relative;
 overflow: hidden;
 background-color: #fc9c27;
 ::before{
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    top: -13px;
    background-image: url(${complet});
    background-repeat: no-repeat;
    background-size: 90%;
 }
`
export const DyWon = styled.div `
  left: 40%;
  top: 0;
  rotate: calc(180deg);
  position: absolute;
  background-image: url(${second});
  width: 280px;
  height: 220px;
  background-size: cover;
  background-position: center;
`