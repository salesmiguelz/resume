import { useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { SearchForm } from "./components/SearchForm";
import { ErrorMessage, ErrorMessageContainer, PortfolioContainer } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Spinner } from "./components/Spinner";
import { HeaderReturnContainer } from "./components/Header/styles";
import { ArrowLeft } from "phosphor-react";
import { StackUsed } from "../../components/StackUsed";

export function Portfolio() {
    const { username: paramUsername } = useParams();
    const { errorMessage, isLoading, userData, handleSetUserPortfolio, handleReturnHome } = useContext(UserContext);
    const userAlreadyLoaded = userData?.user?.login?.toLowerCase() === paramUsername?.toLowerCase();

    useEffect(() => {
        if (paramUsername && !userAlreadyLoaded) {
            handleSetUserPortfolio(paramUsername);
        }
    }, [paramUsername]);
    return (

        <PortfolioContainer>
            {
                errorMessage ? (
                    <>
                        <HeaderReturnContainer onClick={handleReturnHome}>
                            <ArrowLeft size={24} />
                        </HeaderReturnContainer>
                        <ErrorMessageContainer>

                            <span>:(</span>
                            <ErrorMessage>{errorMessage}</ErrorMessage>
                        </ErrorMessageContainer>
                    </>
                ) :
                    !isLoading ? (
                        <>
                            <Header />
                            <StackUsed />
                            <SearchForm />
                            <Projects />
                        </>
                    ) : <Spinner />
            }
        </PortfolioContainer>
    )
}