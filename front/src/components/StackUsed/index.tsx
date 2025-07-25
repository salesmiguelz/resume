import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechUsageBar } from "../TechUsageBar";
import { LanguagesTitle, LanguagesUsedContainer, StackUsedContainer, TechnologiesTitle, TechnologiesUsedContainer } from "./styles";

export function StackUsed() {
  const { techUsage, languageUsage } = useContext(UserContext);
  return (
    <StackUsedContainer>
      <LanguagesUsedContainer>
        <LanguagesTitle>Linguagens</LanguagesTitle>
        <TechUsageBar data={languageUsage} isLanguage={true} />
      </LanguagesUsedContainer>
      <TechnologiesUsedContainer>
        <TechnologiesTitle>Tecnologias</TechnologiesTitle>
        <TechUsageBar data={techUsage} isLanguage={false} />
      </TechnologiesUsedContainer>
    </StackUsedContainer>
  )
}