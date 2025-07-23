import { ArrowLeft, Code } from "phosphor-react";
import { HeaderContainer, HeaderLogoContainer, HeaderReturnContainer, HeaderTitle } from "./styles";
import { Profile } from "./components/Profile";
import { UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";

export function Header() {
    const { userData, handleReturnHome } = useContext(UserContext)

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
