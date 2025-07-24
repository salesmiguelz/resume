import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextProviderProps {
    children: ReactNode;
}

interface TechPercentage {
    name: string;
    percentage: number;
}

interface UserContextType {
    username?: string;
    userData: UserFetchData;
    isLoading: boolean;
    errorMessage: string;
    languageUsage: TechPercentage[];
    techUsage: TechPercentage[];
    handleSetUserPortfolio: (user: string) => void;
    handleSetErrorMessage: (ErrorMessage: string) => void;
    handleReturnHome: () => void;
}

interface UserFetchData {
    user: {
        avatar_url: string;
        bio: string;
        company: string;
        followers: string;
        following: string;
        html_url: string;
        login: string;
        name: string;
        public_repo: string;
    };
    repos: {
        allDeps: string[];
        description?: string;
        languages: string[];
        mainTechs: string[];
        repo: string;
        source: string;
        createdAt: string;
        updatedAt: string;
        url: string;
    }[];
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
            public_repo: "",
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
                createdAt: "",
                url: "",
            },
        ],
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [languageUsage, setLanguageUsage] = useState<TechPercentage[]>([]);
    const [techUsage, setTechUsage] = useState<TechPercentage[]>([]);

    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_URL;

    async function fetchUserData(username: string) {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/${username}`);
            return {
                statusCode: response.status,
                data: response.data,
            };
        } catch (e) {
            if (axios.isAxiosError(e) && e.response?.status === 404) {
                setErrorMessage("Não encontramos seu usuário do GitHub. Por favor, tente novamente.");
            } else {
                setErrorMessage("Houve um erro na geração do seu portfólio. Por favor, tente novamente.");
            }
            return null;
        }
    }

    function handleSetUserPortfolio(username: string) {
        setUsername(username);
        document.title = `${username} - resume`;
        navigate(`/${username}`);
    }

    function handleSetErrorMessage(ErrorMessage: string) {
        setErrorMessage(ErrorMessage);
    }

    function handleReturnHome() {
        handleSetUserPortfolio("");
        navigate("/");
        handleSetErrorMessage("");
        document.title = "resume";
    }

    function calculatePercentages(items: string[]): TechPercentage[] {
        const countMap = new Map<string, number>();

        items.forEach((item) => {
            countMap.set(item, (countMap.get(item) || 0) + 1);
        });

        const total = items.length;

        return Array.from(countMap.entries())
            .map(([name, count]) => ({
                name,
                percentage: (count / total) * 100,
            }))
            .sort((a, b) => b.percentage - a.percentage)
    }

    useEffect(() => {
        if (username) {
            setIsLoading(true);
            setErrorMessage("");
            fetchUserData(username).then((response) => {
                if (response) {
                    const data = response.data;
                    setUserData(data);

                    const allLanguages = data.repos.flatMap((repo: any) => repo.languages);
                    const allTechs = data.repos.flatMap((repo: any) => repo.mainTechs);

                    setLanguageUsage(calculatePercentages(allLanguages));
                    setTechUsage(calculatePercentages(allTechs));
                }

                setIsLoading(false);
            });
        }
    }, [username]);

    return (
        <UserContext.Provider
            value={{
                username,
                userData,
                isLoading,
                errorMessage,
                languageUsage,
                techUsage,
                handleSetUserPortfolio,
                handleSetErrorMessage,
                handleReturnHome,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
