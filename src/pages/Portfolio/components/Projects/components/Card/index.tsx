import { formatDate, formatDistanceToNow } from "date-fns";
import { Tag } from "../Tag";
import { CardContainer, CardDate, CardDescription, CardHeader, CardTitle, CardTags, CardUpdatedAt } from "./styles";
import { ptBR } from "date-fns/locale";

interface CardProps {
    title: string,
    createdAt: string,
    updatedAt: string,
    techs: string[],
    languages: string[],
    description?: string
}

export function Card({ title, createdAt, updatedAt, techs, languages, description }: CardProps) {
    let formattedCreatedAtDate = null;
    let formattedUpdatedAtDate = null;
    if (createdAt) {
        formattedCreatedAtDate = formatDate(createdAt, 'PPP', {
            locale: ptBR
        })
    }

    if (updatedAt) {
        formattedUpdatedAtDate = formatDistanceToNow(updatedAt, {
            addSuffix: true,
            locale: ptBR
        })
    }

    return (
        <CardContainer>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDate>{formattedCreatedAtDate}</CardDate>
            </CardHeader>
            <CardTags>
                {
                    techs.slice(0, 3).map(tech => (
                        <Tag key={tech} name={tech} variant="blue" />
                    ))
                }
            </CardTags>

            <CardTags>
                {
                    languages.slice(0, 3).map(language => (
                        <Tag key={language} name={language} variant="green" />
                    ))
                }
            </CardTags>
            <CardDescription>{description}</CardDescription>
            <CardUpdatedAt>Última atualização {formattedUpdatedAtDate}</CardUpdatedAt>
        </CardContainer>
    )
}