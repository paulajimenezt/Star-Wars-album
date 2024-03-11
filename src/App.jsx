import "./App.css";
import React, { useState, useEffect } from "react";
import Album from "./components/album/album";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./utils/theme";
import { lightTheme } from "./utils/theme";
import Header from "./components/header/header";
import ObtainPacks from "./components/obtain-packs/obtain-packs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardContext from "components/card-context/card-context";

const queryClient = new QueryClient();
function App() {
  const [collectedCards, setCollectedCards] = useState({
    Film: ["1", "4"],
    Character: ["2", "6", "7"],
    Starship: ["3", "5"],
  });
  const [openPacks, setOpenPacks] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleOpenPacks = () => setOpenPacks(true);
  const handleClosePacks = () => setOpenPacks(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("collectedCards");
    if (storedValue) {
      setCollectedCards(JSON.parse(storedValue));
    } else {
      localStorage.setItem("collectedCards", JSON.stringify(collectedCards));
    }
  }, []);

  const updateCollection = (collection) => {
    setCollectedCards(collection);
    localStorage.setItem("collectedCards", JSON.stringify(collection));
  };

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CardContext.Provider value={{ collectedCards, updateCollection }}>
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
        </CardContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
