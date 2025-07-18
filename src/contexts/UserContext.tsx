import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    username?: string,
    userData: UserFetchData,
    isLoading: boolean,
    handleSetUserPortfolio: (user: string) => void
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



export function UserContextProvider({ children }: UserContextProviderProps) {
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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

    const navigate = useNavigate();

    async function fetchUserData(username: string) {
        try {
            const response = await axios.get(`http://localhost:3000/users/${username}`);


            return response?.data;
        } catch (e) {
            console.log("Houve um erro ao buscar as informações.")
        }
    }

    function handleSetUserPortfolio(username: string) {
        setUsername(username);
        document.title = `${username} - resume`
        navigate(`/${username}`)
    }

    useEffect(() => {
        if (username) {
            setIsLoading(true);
            fetchUserData(username)
                .then(data => {
                    setUserData(data);
                })
                .catch(() => {

                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [username])

    return (
        <UserContext.Provider value={{ username, userData, handleSetUserPortfolio, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}