import styled from "styled-components";
export const SectionLoading = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fbe3d2;
  z-index: 100;
`;

export const ContainerImg = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  user-select: none;
  img {
    user-select: none;
    width: 100%;
    display: block;
  }
`;
