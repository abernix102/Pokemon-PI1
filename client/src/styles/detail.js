import styled from "styled-components";

export const SectionDetail = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cornsilk;
`;

export const ContainerAll = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 13px;
  flex-direction: row;
  background-color: ${props => props.color || "red"};
  justify-content: space-between;
  width: 50%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
`;


//pokemon:
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  text-align: center;
  overflow: hidden;
`;

//contenedor del pokemon
export const Contenedor = styled.div`
background-color: #e942425e;
display: flex;
flex-direction:column;
border-radius: 5px 5px 5px;
width: 100%;
align-items: center;
`

export const ContentTitle = styled.div`
  display: flex;
  color: #fff;
  text-transform: capitalize;
  align-items: center;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InPokemon = styled.div`
  width: 90%;
  color: #fff;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 15px 0;
  p {
    margin: 0;
    font-weight: bold;
    span {
      font-weight: 400;
    }
  }
`;
export const TypesSPan = styled.p`
  color: #fff;
  background-color: ${props => props.color || "red"};
  box-shadow: 10px 10px 19px -3px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  padding: 5px 20px;
`;

export const ContentImg = styled.figure`
  width: 70%;
  position: relative;
  img {
    width: 100%;
    display: block;
  }
`;

//informacion pokemon
export const ContainerRight = styled.div`
  display: flex;
  border-radius: 13px;
  width: 50%;
  padding: 15px;
  text-transform: capitalize;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  h2 {
    color: #ffc3fd;
    margin: 0;
  }
  h3 {
    margin: 0;
    padding: 5px 0;
    font-weight: 500;
  }

  label{
    display: flex;
    width: 70%;
    font-weight: 500;
    gap: 20px;
    justify-content: space-between;
  }
    progress {
    width: 70%;
    height: 25px;
  }

`;


