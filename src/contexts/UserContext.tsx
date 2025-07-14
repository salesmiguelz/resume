import { createContext, type ReactNode } from "react";
import { useParams } from "react-router-dom";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    user?: string
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {
    const { user } = useParams();

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}