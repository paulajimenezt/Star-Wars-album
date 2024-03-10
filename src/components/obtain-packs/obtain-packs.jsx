import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Modal from "@mui/material/Modal";
import packImage from "../../assets/pack-darkmode.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0.5px solid",
  boxShadow: 24,
  padding: 4,
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
        <Typography variant="h6" component="h2">
          Open new packs
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <img src={packImage} alt="Pack Dark Mode" />
          </Grid>
          <Grid xs={8}></Grid>
        </Grid>
      </Container>
    </Modal>
  );
}
