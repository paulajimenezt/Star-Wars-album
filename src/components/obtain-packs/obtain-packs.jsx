import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CardPack from "../card-pack/card-pack";
import FetchPackCards from "../card-pack/fetch-pack-cards";

const style = {
  position: "absolute",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "auto",
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
      <Container maxWidth="md" position="absolute" sx={style}>
        <Box display={"flex"} alignItems={"center"} flexWrap="wrap">
          <Typography
            variant="h4"
            flexGrow={1}
            sx={{ textAlign: "center", p: 2 }}
          >
            Open new packs
          </Typography>
          <Button
            variant="contained"
            sx={{ ml: "auto" }}
            startIcon={<ArrowBackIcon />}
            onClick={props.handleClosePacks}
          />
        </Box>
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
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap="wrap">
          <FetchPackCards variation="light" />
        </Box>
      </Container>
    </Modal>
  );
}
