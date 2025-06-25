import { Code } from "phosphor-react";
import { HeaderContainer, HeaderLogoContainer, HeaderTitle } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <Code size={32} weight="light" />
            </HeaderLogoContainer>
            <HeaderTitle>PROJETOS GITHUB</HeaderTitle>
        </HeaderContainer>
    )
}
