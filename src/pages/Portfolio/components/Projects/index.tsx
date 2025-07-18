import { useContext } from "react";
import { ProjectsContainer } from "./styles";
import { UserContext } from "../../../../contexts/UserContext";
import { Card } from "./components/Card";

export function Projects() {
    const { userData } = useContext(UserContext)
    return (
        <>
            <ProjectsContainer>
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

            </ProjectsContainer>
        </>
    )
}