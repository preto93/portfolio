import React from "react";
import "./Portfolio.css";
import { Box, Container, Grid } from "@mui/material";
import DefaultBox from "../../utils/DefaultBox/DefaultBox";

const Porftolio = () => {
  const cards = [
    {
      id: "1",
      variant: "hover",
      front: "Hover",
      back: "Back"
    },
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back"
    },
    {
      id: "3",
      variant: "focus",
      front: "Focus",
      back: "Back"
    }
  ];


  return (
    <>
      <Container>
        <Grid container>
          <div>
            <label>Dev Portfolio</label>
          </div>
          <div>
            <button>All</button>
            <button>React JS</button>
            <button>Web 3</button>
            <button>Flutter</button>
          </div>
        </Grid>
        <Grid style={{ display: "flex", flexDirection: "row" }} container>
        {cards.map((card) => (
          <Grid item md={3}>
            
              <DefaultBox key={card.id} card={card} />
            
          </Grid>
          ))}
          
        </Grid>
      </Container>
    </>
  );
};

export default Porftolio;
