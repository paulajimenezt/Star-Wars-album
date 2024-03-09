import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function AlbumCard() {
  return (
    <Box width={150}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            1
          </Typography>
          <Typography variant="h5" component="div">
            Luke Sywalker
          </Typography>
          <Divider />
          <Typography variant="body2">Character</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
