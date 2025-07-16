import { TagColor, TagContainer, TagLabel } from "./styles";

interface TagProps {
    name: string
}

export function Tag({ name }: TagProps) {
    return (
        <TagContainer>
            <TagColor />
            <TagLabel>{name}</TagLabel>
        </TagContainer>
    )
}