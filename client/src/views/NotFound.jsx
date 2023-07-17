import {SectionNot, ContainerFound, TitleFound, ContainerImg,ContBut } from "../styles/not_found"
import fondFound from "../assets/dasdasdsadsadsada-removebg-preview.png"
const NotFound = (params) => {
    return(
        <SectionNot>
        <ContainerFound>
        <TitleFound><h2>4O4</h2><ContainerImg ><img src={fondFound} alt="found" /></ContainerImg></TitleFound>
        <p><span>Oops!</span> a wild Bulbasaur has blocked your path!</p>
        <ContBut to="/">Go Back</ContBut>
        </ContainerFound>
    </SectionNot>
    )
}

export default NotFound