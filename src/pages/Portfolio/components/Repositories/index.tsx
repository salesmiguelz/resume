import { useContext } from "react";
import { RepositoriesContainer, RepositoriesData, RepositoriesText, RepositoriesTitle } from "./styles";
import { UserContext } from "../../../../contexts/UserContext";
import { Card } from "./components/Card";

export function Repositories() {
    const { userData } = useContext(UserContext)
    return (
        <>
            <RepositoriesText>
                <RepositoriesTitle>Repositórios</RepositoriesTitle>
                <RepositoriesData>Últimos {userData.repos.length}</RepositoriesData>
            </RepositoriesText>
            <RepositoriesContainer>
                {
                    Array.isArray(userData.repos) ? (
                        userData.repos.map(repo => (
                            <Card
                                key={repo.repo}
                                title={repo.repo}
                                description={repo.description}
                                createdAt={repo.createdAt}
                                updatedAt={repo.updatedAt}
                                techs={repo.mainTechs}
                                languages={repo.languages}
                                url={repo.url}
                            />
                        ))
                    ) : null
                }

            </RepositoriesContainer>
        </>
    )
}