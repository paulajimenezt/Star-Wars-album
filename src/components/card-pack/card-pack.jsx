import * as React from "react";
import darkPackImage from "../../assets/pack-darkmode.png";
import lightPackImage from "../../assets/pack-lightmode.png";
import { Container } from "@mui/material";

export default function CardPack(props) {
  const variation = props.variation;
  return (
    <Container style={{ margin: 2 }}>
      <img
        src={variation === "light" ? lightPackImage : darkPackImage}
        alt={variation === "light" ? "Light card pack" : "Dark card pack"}
        style={{ width: "100px" }}
      />
    </Container>
  );
}
