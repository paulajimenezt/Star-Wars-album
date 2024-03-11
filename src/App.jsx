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
const uuid = require("uuid");

function App() {
  const generateRandomPack = () => {
    return Math.random() < 0.5 ? "light" : "dark";
  };

  const [collectedCards, setCollectedCards] = useState({
    Film: [],
    Character: [],
    Starship: [],
  });
  const [openPacks, setOpenPacks] = React.useState(false);
  const [availablePacks, setAvailablePacks] = React.useState([
    { vartiant: generateRandomPack(), id: uuid.v4() },
    { vartiant: generateRandomPack(), id: uuid.v4() },
    { vartiant: generateRandomPack(), id: uuid.v4() },
    { vartiant: generateRandomPack(), id: uuid.v4() },
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const [packTimeout, setPackTimeout] = useState(0);
  const handleOpenPacks = () => setOpenPacks(true);
  const handleClosePacks = () => setOpenPacks(false);

  // Check for collected cards in local storage
  useEffect(() => {
    const storedValue = localStorage.getItem("collectedCards");
    if (storedValue) {
      setCollectedCards(JSON.parse(storedValue));
    } else {
      localStorage.setItem("collectedCards", JSON.stringify(collectedCards));
    }
    // we only want to run this once at startup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if available packs is less than 4 and theres is no timeout, add a new pack
    if (availablePacks.length < 4 && !packTimeout) {
      // generate a string that says either light or dark randomly
      const variant = generateRandomPack();
      setAvailablePacks((p) => [...p, { variant, id: uuid.v4() }]);
    }
  }, [availablePacks, packTimeout]);

  useEffect(() => {
    if (packTimeout <= 0) return;
    const intervalId = setInterval(() => {
      setPackTimeout((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [packTimeout]);

  useEffect(() => {
    if (packTimeout <= 0) return;
    const intervalId = setInterval(() => {
      setPackTimeout((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [packTimeout]);

  const removeAvailablePack = (id) => {
    const packs = availablePacks.filter((pack) => pack.id !== id);
    setAvailablePacks(packs);
  };

  const removeOpenCard = (id) => {
    const newCards = openCards.filter((card) => card.id !== id);
    setOpenCards(newCards);
  };

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
              availablePacks={availablePacks}
              setOpenCards={setOpenCards}
              openCards={openCards}
              packTimeout={packTimeout}
              setPackTimeout={setPackTimeout}
              removeOpenCard={removeOpenCard}
              removeAvailablePack={removeAvailablePack}
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
