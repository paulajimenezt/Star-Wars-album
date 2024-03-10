import "./App.css";
import React, { useState } from "react";
import Album from "./components/album/album";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./utils/theme";
import { lightTheme } from "./utils/theme";
import Header from "./components/header/header";
import ObtainPacks from "./components/obtain-packs/obtain-packs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const [openPacks, setOpenPacks] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleOpenPacks = () => setOpenPacks(true);
  const handleClosePacks = () => setOpenPacks(false);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Header
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            handleOpenPacks={handleOpenPacks}
          />
          <ObtainPacks
            openPacks={openPacks}
            handleClosePacks={handleClosePacks}
          />
          <Container maxWidth="lg">
            <Album />
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
