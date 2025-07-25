import { useContext, useState, useRef } from "react";
import { SearchFormInput } from "../Portfolio/components/SearchForm/styles";
import { DescriptionContainer, HomeContainer, SearchFormContainer, TitleContainer } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { Footer } from "../Portfolio/components/Footer";

export function Home() {
    const [username, setUsername] = useState("");
    const { handleSetUserPortfolio } = useContext(UserContext);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: any) {
        e.preventDefault();
        const trimmedUsername = username.trim();
        handleSetUserPortfolio(trimmedUsername);
    }

    function handleFocus() {
        inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
                    <SearchFormInput
                        ref={inputRef}
                        placeholder="Digite seu usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={handleFocus}
                    />
                    <button type="submit">Criar</button>
                </SearchFormContainer>
                <Footer />
            </HomeContainer>
        </>
    )
}
