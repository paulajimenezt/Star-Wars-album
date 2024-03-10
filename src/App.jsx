import Album from "components/album/album";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "utils/theme";
import { lightTheme } from "utils/theme";
import "./App.css";
import { Button } from "@mui/material";
import ButtonAppBar from "components/header/header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <ButtonAppBar />
        <Container maxWidth="lg">
          <Album />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
