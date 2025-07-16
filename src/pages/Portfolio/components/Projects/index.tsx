import { useContext } from "react";
import { ProjectsContainer } from "./styles";
import { UserContext } from "../../../../contexts/UserContext";
import { Card } from "./components/Card";

export function Projects() {
    const { userData } = useContext(UserContext)
    return (
        <ProjectsContainer>
            {
                Array.isArray(userData.repos) ? (
                    userData.repos.map(repo => (
                        <Card
                            title={repo.repo}
                            description={repo.description}
                            date={String(new Date(repo.createdAt))}
                            tags={repo.mainTechs}
                        />
                    ))
                ) : null
            }
        </ProjectsContainer>
    )
}