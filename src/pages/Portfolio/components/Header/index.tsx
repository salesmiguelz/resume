import { ArrowLeft, Code } from "phosphor-react";
import { HeaderContainer, HeaderLogoContainer, HeaderReturnContainer, HeaderTitle } from "./styles";
import { Profile } from "./components/Profile";
import { UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
    const { userData, handleSetUserPortfolio } = useContext(UserContext)
    const navigate = useNavigate();

    function handleReturnHome() {
        handleSetUserPortfolio("")
        document.title = "resume"
        navigate("/")
    }
    return (
        <HeaderContainer>
            <HeaderReturnContainer onClick={handleReturnHome}>
                <ArrowLeft size={24} />
            </HeaderReturnContainer>
            <HeaderLogoContainer >
                <Code size={32} weight="light" />
            </HeaderLogoContainer>
            <HeaderTitle>{userData.user.login}</HeaderTitle>
            <Profile />
        </HeaderContainer>
    )
}
