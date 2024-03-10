import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
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
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Open new packs
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
}
