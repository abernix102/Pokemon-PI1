import styled from "styled-components";
import svgMid from "../assets/ddpill.png";
// import scott from "../assets/scott.jpg";
export const FormSection = styled.div`
  display: flex;
  width: 100%;
  background-color: #ebebeb;
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
  height: 85%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
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
  background: #fff;
  position: relative;
  justify-content: center;
  h2{
    color: #fff;
  }
  /* ::before {
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
  } */
`;

export const Conteinlabel = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 50px;
  label {
    font-weight: 500;
    text-transform: capitalize;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  input {
    border-radius: 15px;
    border: 1px solid;
  }
  button {
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    width: 200px;
    border: none;
    background: #f74444;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #ff1919;
    }
  }
`;
export const Content = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  h2 {
    text-align: center;
    margin: 0;
    text-transform: capitalize;
    background-color: #f74444;
    width: 100%;
    padding: 20px;
  }
`;

export const ContainerSelect = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  select {
    border-radius: 5px;
    width: 30%;
  }
`;

export const ButtomBack = styled.button`
  border: none;
  bottom: 35px;
  left: 35px;
  background: none;
  position: absolute;
  cursor: pointer;
`;
