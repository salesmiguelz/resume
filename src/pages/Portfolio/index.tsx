import { useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { SearchForm } from "./components/SearchForm";
import { PortfolioContainer } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Spinner } from "./components/Spinner";

export function Portfolio() {
    const { username: paramUsername } = useParams();
    const { isLoading, handleSetUserPortfolio, userData } = useContext(UserContext);
    const userAlreadyLoaded = userData?.user?.login?.toLowerCase() === paramUsername?.toLowerCase();

    useEffect(() => {
        if (paramUsername && !userAlreadyLoaded) {
            handleSetUserPortfolio(paramUsername);
        }
    }, [paramUsername]);
    return (

        <PortfolioContainer>
            {
                !isLoading ? (
                    <>
                        <Header />
                        <SearchForm />
                        <Projects />
                    </>
                ) : <Spinner />
            }
        </PortfolioContainer>
    )
}