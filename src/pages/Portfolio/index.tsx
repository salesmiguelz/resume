import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { SearchForm } from "./components/SearchForm";
import { PortfolioContainer } from "./styles";

export function Portfolio() {
    return (
        <PortfolioContainer>
            <Header />
            <SearchForm />
            <Projects />
        </PortfolioContainer>
    )
}