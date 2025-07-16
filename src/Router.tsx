import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { UserContextProvider } from "./contexts/UserContext";

export function Router() {
    return (
        <Routes>
            <Route path="/users/:username" element={
                <UserContextProvider >
                    <Portfolio />
                </UserContextProvider>
            } />
        </Routes>
    )
}