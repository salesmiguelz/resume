import { ArrowSquareOut } from "phosphor-react";
import { LinkContainer } from "./styles";

interface LinkProps {
    label: string
}

export function Link({ label }: LinkProps) {
    return (
        <LinkContainer>
            <ArrowSquareOut />
            <p>{label}</p>
        </LinkContainer>
    )
}