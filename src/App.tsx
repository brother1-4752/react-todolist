import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";

import { darkModeState } from "./atoms/atoms";
import { darkTheme, lightTheme } from "./styles/theme/theme";

import { Header } from "./components/common/header";
import GlobalStyle from "./styles/GlobalStyle";

const AppContainer = styled.div`
  width: 100%;
`;

export default function App() {
  const isDark = useRecoilValue(darkModeState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />

        <Outlet />
      </AppContainer>
    </ThemeProvider>
  );
}
