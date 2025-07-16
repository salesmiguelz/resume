import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router-dom";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    username?: string,
    userData: UserFetchData
}

interface UserFetchData {
    user: {
        avatar_url: string,
        bio: string,
        company: string,
        followers: string,
        following: string,
        html_url: string,
        login: string,
        name: string,
        public_repo: string
    },
    repos: [
        {
            allDeps: string[],
            description?: string,
            languages: string[],
            mainTechs: string[],
            repo: string,
            source: string,
            createdAt: string,
            updatedAt: string
        }
    ]
}

export const UserContext = createContext({} as UserContextType);

async function fetchUserData(username: string) {
    try {
        const response = await axios.get(`http://localhost:3000/users/${username}`);

        return response?.data;
    } catch (e) {
        console.log("Houve um erro ao buscar as informações.")
    }
}

export function UserContextProvider({ children }: UserContextProviderProps) {
    const { username } = useParams();
    const [userData, setUserData] = useState<UserFetchData>({
        user: {
            avatar_url: "",
            bio: "",
            company: "",
            followers: "",
            following: "",
            html_url: "",
            login: "",
            name: "",
            public_repo: ""
        },
        repos: [
            {
                allDeps: [],
                description: "",
                languages: [],
                mainTechs: [],
                repo: "",
                source: "",
                updatedAt: "",
                createdAt: ""
            }
        ]
    });

    useEffect(() => {
        if (username) {
            fetchUserData(username).then(data => setUserData(data));
        }
    }, [username])

    return (
        <UserContext.Provider value={{ username, userData }}>
            {children}
        </UserContext.Provider>
    )
}