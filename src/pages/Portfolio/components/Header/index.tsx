import { Code } from "phosphor-react";
import { HeaderContainer, HeaderLogoContainer, HeaderTitle } from "./styles";
import { Profile } from "./components/Profile";

export function Header() {
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
