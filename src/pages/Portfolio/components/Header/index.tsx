import { Code } from "phosphor-react";
import { HeaderContainer, HeaderLogoContainer, HeaderTitle } from "./styles";
import { Profile } from "./components/Profile";
import { UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";

export function Header() {
    const { user } = useContext(UserContext);
    console.log("user no header", user)
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <Code size={32} weight="light" />
            </HeaderLogoContainer>
            <HeaderTitle>salesmiguelz</HeaderTitle>
            <Profile />
        </HeaderContainer>
    )
}
