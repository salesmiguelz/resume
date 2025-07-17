import { SearchFormInput } from "../Portfolio/components/SearchForm/styles";
import { DescriptionContainer, HomeContainer, ProjectDetails, SearchFormContainer, TitleContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <TitleContainer>
                <h1>resu<span>me</span></h1>
            </TitleContainer>
            <DescriptionContainer>
                <p>Você já tem o GitHub. Agora tem um portfólio. Grátis. Sim, é sério.</p>
            </DescriptionContainer>
            <SearchFormContainer>
                <SearchFormInput placeholder="Digite seu usário" />
                <button>Criar</button>
            </SearchFormContainer>

            <ProjectDetails>
                <p>Feito com &lt;3 por <a target="_blank" href="https://github.com/salesmiguelz">@salesmiguelz</a></p>
            </ProjectDetails>
        </HomeContainer>
    )
}