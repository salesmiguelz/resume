import { useContext, useState } from "react";
import { SearchFormInput } from "../Portfolio/components/SearchForm/styles";
import { DescriptionContainer, HomeContainer, SearchFormContainer, TitleContainer } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { Footer } from "../Portfolio/components/Footer";


export function Home() {
    const [username, setUsername] = useState("");
    const { handleSetUserPortfolio } = useContext(UserContext)

    function handleSubmit(e: any) {
        e.preventDefault();
        const trimmedUsername = username.trim();
        handleSetUserPortfolio(trimmedUsername)
    }

    return (
        <>
            <HomeContainer>
                <TitleContainer>
                    <h1>resu<span>me</span></h1>
                </TitleContainer>
                <DescriptionContainer>
                    <p>Você já tem o GitHub. Agora tem um portfólio. Grátis. Sim, é sério.</p>
                </DescriptionContainer>
                <SearchFormContainer onSubmit={handleSubmit}>
                    <span>@</span>
                    <SearchFormInput placeholder="Digite seu usário" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button type="submit">Criar</button>
                </SearchFormContainer>
                <Footer />
            </HomeContainer>
        </>
    )
}