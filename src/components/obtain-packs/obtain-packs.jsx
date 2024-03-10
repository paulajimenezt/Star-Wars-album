import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Modal from "@mui/material/Modal";
import AlbumCard from "../album-card/album-card";
import CardPack from "../card-pack/card-pack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0.5px solid",
  boxShadow: 24,
  p: 0,
};

export default function ObtainPacks(props) {
  return (
    <Modal
      open={props.openPacks}
      onClose={props.handleClosePacks}
      aria-labelledby="open-packs-screen"
      aria-describedby="In this modal the user opens new packs"
    >
      <Container maxWidth="md" sx={style}>
        <Typography variant="h4" sx={{ textAlign: "center", p: 2 }}>
          Open new packs
        </Typography>
        <Grid
          display={"flex"}
          justifyContent={"space-evenly"}
          flexWrap="wrap"
          spacing={2}
        >
          <Grid xs={3}>
            <CardPack variation="dark" />
          </Grid>
          <Grid xs={3}>
            <CardPack variation="light" />
          </Grid>
          <Grid xs={3}>
            <CardPack variation="dark" />
          </Grid>
          <Grid xs={3}>
            <CardPack variation="light" />
          </Grid>
        </Grid>
        <Grid
          display={"flex"}
          justifyContent={"space-evenly"}
          flexWrap="wrap"
          spacing={4}
        >
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </Grid>
      </Container>
    </Modal>
  );
}
