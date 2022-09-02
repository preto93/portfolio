import { Container, Grid, Slider, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import "./Skills.css";
import icono from "../../assets/iconoProvisorio.png";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import Slide from "react-reveal/Slide";
import JsLogo from '../../assets/javascript.png';
import Html5Logo from '../../assets/html5.png';
import Css3 from '../../assets/css3.png';
import NodeJs from '../../assets/nodejs.png';
import ReactLogo from '../../assets/react2.png';
import SolidityLogo from '../../assets/solidity.png';

const PrettoSlider = styled(Slider)({
  color: "#E94560",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& 	.Mui-disabled": {
    backgroundColor: "#E94560 !important",

    size: "3rem",
  },

  " & .MuiSlider-rail": {
    color: "black",
  },
  " & .MuiSlider-track": {
    backgroundColor: "#E94560 !important",
    height: "10px",
  },

  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: "black",

    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#E94560",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Skills = () => {
  return (
    <div
    id="skills"
      style={{
        backgroundColor: "#1A1A2E",
        paddingTop: "4rem",
        paddingBottom: "10rem",
      }}
    >
      <Container>
        <Slide bottom>
          <Grid
            item
            md={12}
            className="title-skills"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SnowboardingIcon fontSize="large" color="info" />
            <h1 style={{ textAlign: "center" }}>Skills</h1>
          </Grid>
          <Grid sx={{ display: "flex", flexDirection: "row" }} container>
            <Grid item md={6}>
              <Slide bottom delay={500}>
                <h1 className="subtitle-skills">TECHNICAL SKILLS</h1>
              </Slide>
              
              <Grid item md={12}>
              <img src={JsLogo} alt='' width="100px" />
              <img src={ReactLogo} alt='' width="100px" />
              <img src={NodeJs} alt='' width="100px" />
              </Grid>
              <Grid item md={12}>
              <img src={Html5Logo} alt='' width="100px" />
              <img src={Css3} alt='' width="100px" />
              
              
              <img src={SolidityLogo} alt='' width="100px" />
              </Grid>
              
              
            </Grid>
            <Grid item md={6}>
              <Slide bottom delay={500}>
                <h1 className="subtitle-skills">PROFESSIONAL SKILLS</h1>
              </Slide>
              <label className="label-skills">Comunication</label>
              <Box sx={{ width: "90%", display: "flex", flexDirection: "row" }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={100}
                  disabled
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="label-expertise">100%</label>
              </Box>
              <label className="label-skills">Teamwork</label>
              <Box sx={{ width: "90%", display: "flex", flexDirection: "row" }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={75}
                  disabled
                />
                &nbsp;&nbsp;&nbsp;<label className="label-expertise">75%</label>
              </Box>
              <label className="label-skills">Creativity</label>
              <Box sx={{ width: "90%", display: "flex", flexDirection: "row" }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={75}
                  disabled
                />
                &nbsp;&nbsp;&nbsp;<label className="label-expertise">75%</label>
              </Box>
              <label className="label-skills">Dedication</label>
              <Box sx={{ width: "90%", display: "flex", flexDirection: "row" }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={100}
                  disabled
                />
                &nbsp;&nbsp;&nbsp;
                <label className="label-expertise">100%</label>
              </Box>
              <label className="label-skills">Project Management</label>
              <Box sx={{ width: "90%", display: "flex", flexDirection: "row" }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={85}
                  disabled
                />
                &nbsp;&nbsp;&nbsp;<label className="label-expertise">85%</label>
              </Box>
            </Grid>

            
         
          
            
          </Grid>
        </Slide>
      </Container>
    </div>
  );
};

export default Skills;
