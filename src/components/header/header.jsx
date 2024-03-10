import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { DarkModeSwitch } from "./dark-mode-switch";
import darkLogo from "../../assets/star-wars-album-logo-dark.png";
import lightLogo from "../../assets/star-wars-album-logo-light.png";

export default function Header(props) {
  let darkMode = props.darkMode;
  const setDarkMode = props.setDarkMode;
  const handleOpenPacks = props.handleOpenPacks;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          mb: 2,
          boxShadow: 4,
        }}
      >
        <Toolbar>
          <img
            src={darkMode ? darkLogo : lightLogo}
            alt="Star Wars Logo"
            style={{ width: "100px" }}
          />
          <Box sx={{ ml: "auto" }}>
            <Button
              variant="outlined"
              style={{ marginRight: 10 }}
              onClick={handleOpenPacks}
            >
              Open Packs
            </Button>
            <DarkModeSwitch
              defaultChecked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
