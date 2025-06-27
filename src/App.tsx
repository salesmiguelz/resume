import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Portfolio } from "./pages/Portfolio";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Portfolio />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
