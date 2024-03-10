import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

export default function AlbumCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseOver() {
    setIsHovered(true);
  }
  function handleMouseOut() {
    setIsHovered(false);
  }
  const fromPacks = props.fromPacks || false;
  const id = props.id;
  const title = props.title;
  const section = props.section;
  const type = props.type;
  const color = type === "Common" ? "silver" : "gold";

  return (
    <Badge
      color="secondary"
      overlap="circular"
      badgeContent={id}
      sx={{
        ".MuiBadge-badge": {
          fontSize: "1.5em",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: color,
          right: 138,
          top: 15,
        },
      }}
    >
      <Box
        width={140}
        height={175}
        sx={{
          border: 7,
          borderRadius: 3,
          m: 1,
          color: "black",
          borderColor: color,
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            color: "black",
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "#0009",
            },
          }}
        >
          <CardContent
            sx={{
              padding: 0,
              paddingTop: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                height: 100,
                fontFamily: "Roboto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {title}
            </Typography>
            <Divider
              sx={{
                borderColor: "black",
                borderWidth: "1px",
                borderStyle: "solid",
                width: "100%",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                height: 65,
                textAlign: "center",
                p: 1,
              }}
            >
              {section} {<br></br>} {type}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Badge>
  );
}
