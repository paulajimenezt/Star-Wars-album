import * as React from "react";
import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import CardContext from "components/card-context/card-context";

export default function AlbumCard(props) {
  const id = props.id;
  const fromPack = props.fromPack || false;
  const title = props.title;
  const section = props.section;
  const type = props.type;
  const color = type === "Common" ? "silver" : "gold";
  const collection = useContext(CardContext);
  const isCollected = collection?.collectedCards[section]?.includes(id);
  const buttonColor = !isCollected ? "success" : "error";

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

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
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        sx={{
          position: "relative",
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
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                height: 100,
                fontFamily: "Roboto",
                textAlign: "center",
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
        {isHovered && fromPack && (
          <Box
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color={buttonColor}
              onClick={() => {
                if (!isCollected) {
                  collection.collectedCards[section].push(id);
                  collection.updateCollection({ ...collection.collectedCards });
                }
              }}
            >
              {isCollected ? "Discard" : "Add To Collection"}
            </Button>
          </Box>
        )}
      </Box>
    </Badge>
  );
}
