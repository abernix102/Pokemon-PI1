import {
  ContainerAbout,
  ContainAbout,
  ContainerFigure,
  TitleContain
} from "../styles/about";
import ash from "../assets/pngwing.com (3).png";
const About = () => {
  return (
    <ContainerAbout>
      <ContainAbout>
        <ContainerFigure>
          <img src={ash} alt="ash_icon" />
        </ContainerFigure>
        <TitleContain>
          <h2>About</h2>
          <p>
            My Pokemons website is a personal project where you can bring your
            imagination to life and create your own custom Pokemons. I used
            modern technologies like React.js, CSS, and Styled Components to
            build an engaging and interactive user interface. For application
            state handling, I implemented Redux, a library that allowed me to
            keep Pokémon data consistent across the web page. I used a
            PostgreSQL database to store the information of the Pokémons and I
            made RESTful requests through an API developed with Node.js and the
            Express framework. My website gives you the possibility to create
            your own Pokémons with personalized characteristics, such as shape,
            color, abilities and movements. In addition, you can search for
            Pokémon created by other users and explore their collection
          </p>
        </TitleContain>
      </ContainAbout>
    </ContainerAbout>
  );
};

export default About;
