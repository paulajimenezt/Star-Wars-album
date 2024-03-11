import * as React from "react";
import darkPackImage from "../../assets/pack-darkmode.png";
import lightPackImage from "../../assets/pack-lightmode.png";
import { Box, Button } from "@mui/material";
import { Container } from "@mui/material";

export default function CardPack(props) {
  const variation = props.variation;
  const packTimeout = props.packTimeout;
  return (
    <Container style={{ margin: 2 }}>
      <Box width={100} height={175} position="relative">
        <img
          src={variation === "Light" ? lightPackImage : darkPackImage}
          alt={variation === "Light" ? "Light card pack" : "Dark card pack"}
          style={{ width: "100px" }}
        />

        {packTimeout > 0 && (
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "90%",
                height: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Wait {packTimeout} seconds
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}
