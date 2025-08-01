import { TagColor, TagContainer, TagLabel } from "./styles";

interface TagProps {
    variant: 'blue' | 'green',
    name: string
}

export function Tag({ variant, name }: TagProps) {
    return (
        <TagContainer>
            <TagColor $variant={variant} />
            <TagLabel>{name}</TagLabel>
        </TagContainer>
    )
}