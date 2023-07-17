import styled from "styled-components";
import svgMid from "../assets/ddpill.png"
export const FormSection = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  height: 100vh;
  flex-direction: row;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  border-radius: 25px;
  overflow: hidden;
  background-color: red;
  height: 85%;
`;

export const ImgContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const Containerform = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  position: relative;
  justify-content: center; 
  ::before{
    content: '';
    position: absolute;
    background-image: url(${svgMid});
    width: 100%;
    height: 100%;
    right: 90%;
    background-repeat: no-repeat;
    pointer-events: none;
    rotate: calc(0deg);
    background-size: cover;
  }
`;

export const Conteinlabel = styled.form `
 background-color: green;
 display: flex;
 flex-direction: column;
 padding: 50px;
`
export const Content = styled.div`
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center; 
    h2{
      text-align: center;
      margin: 0;
      background-color: red;
      width: 100%;
      padding:20px;
    }
`