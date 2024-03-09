import Album from "components/album/album";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "utils/theme";
import { lightTheme } from "utils/theme";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Album />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
