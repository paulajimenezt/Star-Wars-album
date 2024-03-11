import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";

export default function UncollectedCard(props) {
  const id = props.id;
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
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "silver",
          right: "50%",
          top: "50%",
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
          }}
        >
          <CardContent
            sx={{
              padding: 0,
              paddingTop: 1,
            }}
          ></CardContent>
        </Card>
      </Box>
    </Badge>
  );
}
