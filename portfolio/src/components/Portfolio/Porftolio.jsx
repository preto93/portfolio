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
import ReactLogo from "../../assets/react.png";
import DappsFactory from '../../assets/dappsfactory.png';
import MinterFactory from '../../assets/minterFactory.png';
import PerceptionFace from '../../assets/perceptionface.png';
import Zoom from "react-reveal/Zoom";


const Porftolio = () => {
  const [selected, setSelected] = useState("all");
  const [checked, setChecked] = React.useState(false);

  

  const cards = [
    {
      id: "1",
      variant: "click",

      photo: DappsFactory,
      back: "Landing page developed with React.",
      stack: "react",
      goal: 'Developed full interaction with the blockchain to create new criptocurrencies in a easy way in any chain supported.',
      linkGit: "https://dappsfactory.io",
      linkWeb: 'https://dappsfactory.io'
    },
    {
      id: "2",
      variant: "click",
      photo: MinterFactory,
      back: "Create your own criptocurrency. Creation of Tokens ERC-20. Developed with React and EtherJs",
      goal: 'Developed full interaction with the blockchain to create new criptocurrencies in a easy way in any chain supported.',
      stack: "react",
      linkWeb: "https://minterfactory.io"
    },
    {
      id: "3",
      variant: "click",
      photo: PerceptionFace,
      back: "Administration panel developed with React and EtherJs. Smart Contracts made in Solidity.",
      goal: 'Lauched Administration panel connected who interacts with the blockchain to create and control more than 5000 NFTs.',
      stack: "web3",
      linkWeb: "https://perceptionFace.com"
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
      
      <div style={{paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#1A1A2E',}} id="portfolio">
        <Zoom delay={400}>
        <Container>
          <Grid sx={{marginBottom: '2rem'}}>
            <label className="portfolio-box">Portfolio</label>
          </Grid>
          <Zoom delay={800}>
          <Grid container className="portfolio-grid">
            <div>
              <label className="portfolio-title">Recent Works</label>
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
          </Zoom>

          <Grid style={{ display: "flex", flexDirection: "row" }} container>
          <Zoom delay={900}>
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
           </Zoom>
          </Grid>
        </Container>
        </Zoom>
      </div>
      
    </>
  );
};

export default Porftolio;
