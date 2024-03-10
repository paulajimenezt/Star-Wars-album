import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AlbumCard from "../../components/album-card/album-card";

export default function Album() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5">Films</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h5">Characters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlbumCard />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h5">Starships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AlbumCard />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
