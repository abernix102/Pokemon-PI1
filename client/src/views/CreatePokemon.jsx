import {
  FormSection,
  ContainerForm,
  ImgContainer,
  Containerform,
  Content
} from "../styles/formulario.js";
import icon2 from "../assets/formp.jpg";
import FormData from "../components/FormData.jsx";
const CreatePokemon = () => {
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
    </FormSection>
  );
};

export default CreatePokemon;
