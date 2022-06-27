import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import {
  Box,
  Container,
  Grid,
  FormControlLabel,
  Switch,
  Fade,
} from "@mui/material";
import DefaultBox from "../../utils/DefaultBox/DefaultBox";

const Porftolio = () => {
  const [selected, setSelected] = useState("all");
  const [checked, setChecked] = React.useState(false);

  const cards = [
    {
      id: "1",
      variant: "click",
      front: "REACT PROJECT",
      back: "INFO ABOUT REACT PROJECT",
      stack: "react",
    },
    {
      id: "2",
      variant: "click",
      front: "WEB3 PROJECT",
      back: "INFO ABOUT WEB3",
      stack: "web3",
    },
    {
      id: "3",
      variant: "click",
      front: "WEB3 OTHER",
      back: "MORE INFO",
      stack: "web3",
    },
    {
      id: "4",
      variant: "click",
      front: "WEB3 OTHER",
      back: "MORE INFO",
      stack: "web3",
    },
    {
      id: "5",
      variant: "click",
      front: "WEB3 OTHER",
      back: "MORE INFO",
      stack: "web3",
    },
    {
      id: "6",
      variant: "click",
      front: "WEB3 OTHER",
      back: "MORE INFO",
      stack: "web3",
    },
    
  ];

  useEffect(() => {
    setChecked(false);
    setTimeout(() => {
      setChecked(true);
    }, 100);
  }, [selected]);

  return (
    <>
      <div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Container>
          <Grid>
            <label className="portfolio-gray">Portfolio</label>
          </Grid>
          <Grid container className="portfolio-grid">
            <div>
              <label className="portfolio-title">Dev Portfolio</label>
            </div>
            <div className="portfolio-div">
              <button
                className={
                  selected === "all"
                    ? "portfolio-button-selected"
                    : "portfolio-button"
                }
                onClick={() => setSelected("all")}
              >
                All
              </button>
              <button
                className={
                  selected === "react"
                    ? "portfolio-button-selected"
                    : "portfolio-button"
                }
                onClick={() => setSelected("react")}
              >
                React JS
              </button>
              <button
                className={
                  selected === "web3"
                    ? "portfolio-button-selected"
                    : "portfolio-button"
                }
                onClick={() => setSelected("web3")}
              >
                Web 3
              </button>
              <button
                className={
                  selected === "flutter"
                    ? "portfolio-button-selected"
                    : "portfolio-button"
                }
                onClick={() => setSelected("flutter")}
              >
                Flutter
              </button>
            </div>
          </Grid>

          {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}

          <Grid style={{ display: "flex", flexDirection: "row" }} container>
            {cards.map((card, index) => (
              <Fade
                in={checked}
                style={{ transitionDuration: checked ? "2000ms" : "0ms" }}
              >
                <div key={index} className="div-boxes">
                  {selected === "all" ? (
                    <DefaultBox key={card.id} card={card} />
                  ) : card.stack === "react" && selected === "react" ? (
                    <DefaultBox key={card.id} card={card} />
                  ) : card.stack === "web3" && selected === "web3" ? (
                    <DefaultBox key={card.id} card={card} />
                  ) : card.stack === "flutter" && selected === "flutter" ? (
                    <DefaultBox key={card.id} card={card} />
                  ) : null}
                </div>
              </Fade>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Porftolio;
