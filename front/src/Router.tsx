import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { UserContextProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <UserContextProvider >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/:username" element={
                    <Portfolio />
                } />
            </Routes>
        </UserContextProvider>
    )
}