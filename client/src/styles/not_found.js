import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionNot = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #273b40;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  p {
    color: #fff;
    text-align: center;
    margin: 0 auto;
    font-size: 2rem;
    letter-spacing: 5px;
    span {
      color: #ffcb04;
    }
  }
`;

export const ContBut = styled(Link)`
  padding: 15px 45px;
  border-radius: 15px;
  border: none;
  background: #ffcb04;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
`;

export const TitleFound = styled.div`
  margin-top: -100px;
  position: relative;
  h2 {
    font-size: 16rem;
    font-weight: 700;
    margin: 0;
    color: #ffcb04;
    font-family: sans-serif;
    -webkit-letter-spacing: 40px;
    -moz-letter-spacing: 40px;
    -ms-letter-spacing: 40px;
    -webkit-letter-spacing: 30px;
    -moz-letter-spacing: 30px;
    -ms-letter-spacing: 30px;
    letter-spacing: 30px;
  }
`;

export const ContainerImg = styled.div`
     width: 32%;
    position: absolute;
    top: 62px;
    left: 174px;
  img {
    width: 100%;
  }
`;
