import { Tag } from "../Tag";
import { CardContainer, CardDate, CardDescription, CardHeader, CardTitle, CardTags } from "./styles";

export function Card() {
    return (
        <CardContainer>
            <CardHeader>
                <CardTitle>JavaScript data types and data structures</CardTitle>
                <CardDate>Há 1 dia</CardDate>
            </CardHeader>
            <CardTags>
                <Tag />
                <Tag />
                <Tag />
            </CardTags>
            <CardDescription>Programming languages all have built-in data structures, but these often differ from one language to another.
            </CardDescription>
        </CardContainer>
    )
}