import { SectionLoading, ContainerImg} from "../styles/loading";
import pokeball from "../assets/87940025e3e57f78fd69436d72cdfb08.gif"
const Loading = () => {
    return(
        <SectionLoading>
            <ContainerImg>
                <img src={pokeball} alt="pokeball" />
            </ContainerImg>
        </SectionLoading>
    )
}

export default Loading;