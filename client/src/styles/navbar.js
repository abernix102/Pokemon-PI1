import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerList = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
`;
export const ContainerNav = styled.nav`
  display: flex;
  padding: 10px 0;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonContainer = styled(Link)`
  width: 10%;
  border: none;
  padding: 0;
  margin: 0;
  
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    width: 30%;
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const LinkBar = styled(Link)`
text-decoration: none;
font-size: 1.3rem;
cursor: pointer;
font-weight: bold;
color: #fff;
`