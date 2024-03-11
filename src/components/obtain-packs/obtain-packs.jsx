import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CardPack from "../card-pack/card-pack";
import AlbumCard from "../album-card/album-card";
import fetchPackCards from "../../scripts/fetch-pack-cards";

const style = {
  position: "absolute",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "auto",
  minHeight: 300,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0.5px solid",
  boxShadow: 24,
  p: 0,
};

export default function ObtainPacks(props) {
  const setOpenCards = props.setOpenCards;
  const availablePacks = props.availablePacks;
  const openCards = props.openCards;
  const packTimeout = props.packTimeout;
  const setPackTimeout = props.setPackTimeout;
  const removeOpenCard = props.removeOpenCard;
  const removeAvailablePack = props.removeAvailablePack;

  async function handleOpenPack(pack) {
    if (packTimeout <= 0 && openCards.length <= 0) {
      setPackTimeout(60);
      removeAvailablePack(pack.id);
      fetchPackCards(pack.variant).then((cards) => {
        setOpenCards(cards);
      });
    }
  }

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
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          flexWrap="wrap"
          spacing={2}
        >
          {availablePacks?.length > 0 &&
            availablePacks.map((pack) => {
              return (
                <Grid
                  onClick={() => {
                    handleOpenPack(pack);
                  }}
                >
                  <CardPack
                    variation={pack.variant}
                    packTimeout={packTimeout}
                  />
                </Grid>
              );
            })}
        </Box>
        <Box display={"flex"} justifyContent={"space-evenly"} flexWrap="wrap">
          {openCards?.length > 0 &&
            openCards.map((card) => {
              return (
                <AlbumCard
                  key={card.id}
                  id={card.id}
                  section={card.section}
                  title={card.title}
                  type={card.type}
                  fromPack={true}
                  removeOpenCard={removeOpenCard}
                />
              );
            })}
        </Box>
      </Container>
    </Modal>
  );
}
