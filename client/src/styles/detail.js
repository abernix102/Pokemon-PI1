import styled from "styled-components";

export const SectionDetail = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #c5bfbf, #d1caca, #ded6d6, #eae1e1, #f7eded);
`

export const ContainerAll = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 13px;
  flex-direction: row;
  background: #e6e7e5;
  justify-content: space-between;
  width: 50%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
`;

export const ContainerLeft = styled.div`
  display: flex;
  background: #e6e7e5;
  flex-direction: column;
  align-items: center;
  width: inherit;
  text-align: center;
`;
export const ContentImg = styled.figure`
  width: 70%;
  img {
    width: 100%;
    display: block;
  }
`;
export const ContainerRight = styled.div`
  display: flex;
  border-radius: 13px;
  width: 50%;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;
