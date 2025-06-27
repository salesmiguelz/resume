import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { PortfolioContainer } from "./styles";

export function Portfolio() {
    return (
        <PortfolioContainer>
            <Header />
            <SearchForm />
        </PortfolioContainer>
    )
}