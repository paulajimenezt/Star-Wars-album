import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import FetchCards from "./fetch-cards";

export default function Album() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Film-cards-content"
          id="Film-header"
        >
          <Typography variant="h5">Films</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FetchCards section={"Film"} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Characters-cards-content"
          id="Character-header"
        >
          <Typography variant="h5">Characters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FetchCards section={"Character"} />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Starships-cards-content"
          id="Stasrships-header"
        >
          <Typography variant="h5">Starships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FetchCards section={"Starship"} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
