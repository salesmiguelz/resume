import { useContext, useState } from "react";
import { SearchFormInput } from "../Portfolio/components/SearchForm/styles";
import { DescriptionContainer, HomeContainer, ProjectDetails, SearchFormContainer, TitleContainer } from "./styles";
import { UserContext } from "../../contexts/UserContext";


export function Home() {
    const [username, setUsername] = useState("");
    const { handleSetUserPortfolio } = useContext(UserContext)

    function handleFetchUserData(username: string) {
        handleSetUserPortfolio(username)
    }

    return (
        <HomeContainer>
            <TitleContainer>
                <h1>resu<span>me</span></h1>
            </TitleContainer>
            <DescriptionContainer>
                <p>Você já tem o GitHub. Agora tem um portfólio. Grátis. Sim, é sério.</p>
            </DescriptionContainer>
            <SearchFormContainer>
                <span>@</span>
                <SearchFormInput placeholder="Digite seu usário" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => handleFetchUserData(username)}>Criar</button>
            </SearchFormContainer>

            <ProjectDetails>
                <p>Feito com &lt;3 por <a target="_blank" href="https://github.com/salesmiguelz">@salesmiguelz</a></p>
            </ProjectDetails>
        </HomeContainer>
    )
}