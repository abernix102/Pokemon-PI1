import styled from "styled-components";

export const SectionDetail = styled.section`
  /* border: 1px solid red; */
  display: flex;
  height: 100vh;
  background-color: #5dcf5d;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const ContainerLeft = styled.div`
  display: flex;
  background: #50514f4d;
  border-radius: 35px;
  flex-direction: column;
  align-items: center;
  height: 75%;
  text-align: center;
`;
export const ContentImg = styled.figure`
  width: 80%;
  img {
    width: 100%;
    display: block;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  width: 50%;
  height: 75%;
  /* margin-right:-0px; */
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
`;
