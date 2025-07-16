import { ArrowSquareOut } from "phosphor-react";
import { LinkContainer } from "./styles";

interface LinkProps {
    label: string,
    url: string
}

export function Link({ label, url }: LinkProps) {
    return (
        <LinkContainer>
            <ArrowSquareOut />
            <a href={url} target="_blank">{label}</a>
        </LinkContainer>
    )
}