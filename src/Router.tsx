import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { UserContextProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/users/:username" element={
                <UserContextProvider >
                    <Portfolio />
                </UserContextProvider>
            } />
        </Routes>
    )
}