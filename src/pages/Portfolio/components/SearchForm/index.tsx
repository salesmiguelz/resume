import { SearchFormContainer, SearchFormData, SearchFormInput, SearchFormText, SearchFormTitle } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <SearchFormText>
                <SearchFormTitle>Projetos</SearchFormTitle>
                <SearchFormData>6 projetos</SearchFormData>
            </SearchFormText>
            <SearchFormInput placeholder="Busque um projeto" />
        </SearchFormContainer>
    )
}