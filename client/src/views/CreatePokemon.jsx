import {
  FormSection,
  ContainerForm,
  ImgContainer,
  Containerform,
  Content,ButtomBack
} from "../styles/formulario.js";
import icon2 from "../assets/formp.jpg";
import iconBack from "../assets/icons8-back-64.png"
import FormData from "../components/FormData.jsx";
const CreatePokemon = () => {
  const handlerClick = () => {
    window.history.back();
  }
  return (
    <FormSection>
      <ContainerForm>
        <ImgContainer>
          <img src={icon2} alt="poke-name" />
        </ImgContainer>
        <Containerform>
          <Content>
            <h2>pokemon Create</h2>
            <FormData/>
          </Content>
        </Containerform>
      </ContainerForm>
      <ButtomBack onClick={handlerClick}><img src={iconBack} alt="icon_back" /></ButtomBack>
    </FormSection>
  );
};

export default CreatePokemon;
