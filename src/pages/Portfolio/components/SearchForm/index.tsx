import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { SearchFormContainer, SearchFormData, SearchFormInput, SearchFormText, SearchFormTitle } from "./styles";

export function SearchForm() {
    const { userData } = useContext(UserContext)
    return (
        <SearchFormContainer>
            <SearchFormText>
                <SearchFormTitle>Projetos</SearchFormTitle>
                <SearchFormData>{userData.repos.length} projetos</SearchFormData>
            </SearchFormText>
            <SearchFormInput placeholder="Busque um projeto" />
        </SearchFormContainer>
    )
}