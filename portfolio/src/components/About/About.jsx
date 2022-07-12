import React from "react";
import "./About.css";
import { Grid, Divider, Box, Container, Button } from "@mui/material";
import DefaultBox from "../../utils/DefaultBox/DefaultBox";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AndroidIcon from "@mui/icons-material/Android";
import MovieIcon from "@mui/icons-material/Movie";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StyleIcon from "@mui/icons-material/Style";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#16213E",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Fade bottom delay={100}>
          <Container sx={{ paddingTop: "2rem" }}>
            <Grid container item xs={12}>
            
              <Grid item md={3}>
              
                <label
                  style={{
                    backgroundColor: "#0F3460",
                    color: "#E94560",
                    padding: "10px 12px",
                  }}
                >
                  {" "}
                  About Me
                </label>
                <Fade bottom delay={900}>
                <h1 style={{ color: "white" }}>
                  Creative developer based in Buenos Aires
                </h1>
                <Fade bottom delay={1200}>
                <p style={{ color: "#f2f2f2" }}>
                  I'm Creative Independent Web Developer, and I'm very
                  passionate and dedicated to my work. With 20 years experience
                  as a professional web developer, I have acquired the skills
                  and knowledge necessary to make your project a success. I
                  enjoy every step of the design process, from discussion and
                  collaboration.
                </p>
                </Fade>
                </Fade>
              </Grid>
              


              <Grid item md={9}>
                <h2
                  style={{
                    color: "#E94560",
                    textAlign: "center",
                    marginBottom: "4rem",
                  }}
                >
                  My interests
                </h2>
                <Zoom delay={700}>
                <Container sx={{ width: "60%" }}>
                  <Grid container item md={12} className="interests">
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={800}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <VideogameAssetIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Games
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={900}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <MusicNoteIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Music
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1000}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <FlightTakeoffIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Travel
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1100}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <AndroidIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Android
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1200}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <MovieIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Movies
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1300}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <FastfoodIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Food
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1400}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <FitnessCenterIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Excercise
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} className="grid-interests">
                    <Zoom delay={1500}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "10px",
                          backgroundColor: "#0F3460",
                          transition: "background-color 1s",
                          "&:hover": {
                            backgroundColor: "#E94560",
                          },
                        }}
                      >
                        <div className="interest-container">
                          <StyleIcon sx={{ color: "white" }} />
                          <p style={{ color: "white", fontWeight: "bold" }}>
                            Nature
                          </p>
                        </div>
                      </Box>
                      </Zoom>
                    </Grid>
                    
                  </Grid>
                </Container>
                </Zoom>
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </div>
    </>
  );
};

export default About;
