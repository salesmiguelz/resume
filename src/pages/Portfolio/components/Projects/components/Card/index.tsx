import { Tag } from "../Tag";
import { CardContainer, CardDate, CardDescription, CardHeader, CardTitle, CardTags } from "./styles";

interface CardProps {
    title: string,
    date: string,
    tags: string[],
    description: string
}

export function Card({ title, date, tags, description }: CardProps) {
    return (
        <CardContainer>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDate>{new Intl.DateTimeFormat("pt-BR").format(new Date(date))}</CardDate>
            </CardHeader>
            <CardTags>
                {
                    tags.map(tag => (
                        <Tag key={tag} name={tag} />
                    ))
                }
            </CardTags>
            <CardDescription>{description}
            </CardDescription>
        </CardContainer>
    )
}