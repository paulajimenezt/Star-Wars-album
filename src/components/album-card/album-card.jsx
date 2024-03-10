import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function AlbumCard() {
  return (
    <Badge
      color="secondary"
      overlap="circular"
      badgeContent="1"
      sx={{
        ".MuiBadge-badge": {
          fontSize: "1.5em",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#1F6AD2",
          right: 138,
          top: 15,
        },
      }}
    >
      <Box width={140} height={175} sx={{ border: 7, borderRadius: 3, m: 1 }}>
        <Card
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent
            sx={{
              padding: 0,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center", p: 2 }}
            >
              Luke Sywalker
            </Typography>
            <Divider
              sx={{
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                width: "100%",
              }}
            />
            <Typography variant="body2" sx={{ textAlign: "center", p: 1 }}>
              Character Common
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Badge>
  );
}
