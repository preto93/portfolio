import React from "react";
import "./About.css";
import { Grid, Divider, Box, Container, Button } from "@mui/material";
import DefaultBox from '../../utils/DefaultBox/DefaultBox'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AndroidIcon from '@mui/icons-material/Android';
import MovieIcon from '@mui/icons-material/Movie';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StyleIcon from '@mui/icons-material/Style';

const About = () => {
  return (
    <><div style={{ backgroundColor: "#1F2226", paddingTop: '1rem', paddingBottom: '1rem'}}>
      <Container sx={{ paddingTop: "2rem"}}>
        <Grid container item xs={12}>
          <Grid item md={3}>
            <label style={{ backgroundColor: "#f2f2f2", padding: "10px 12px" }}>
              {" "}
              About Me
            </label>
            <h1 style={{ color: "white"}}>Creative developer based in Buenos Aires</h1>
            <p style={{ color: "#f2f2f2" }}>
              I'm Creative Independent Web Developer, and I'm very passionate
              and dedicated to my work. With 20 years experience as a
              professional web developer, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every
              step of the design process, from discussion and collaboration.
            </p>
        
          </Grid>
          
            {/* <h2>Sebastian Medina</h2>
            <h3>Software developer</h3>
            <p>
              Ultricies nisi voluptatem, illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo nemo enim ipsam
              voluptatem. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque latu dantium, totam rem aperiam,
              eaque ipsa quae ab illo tempor dignissim at.
            </p>
            <h2>SIGNATURE</h2>
            <Divider />
            <h4>Date of Birth:</h4>
            <p>01/01/1990</p>
            <h4>Email:</h4>
            <p>snmedina91@gmail.com</p>
            <h4>Phone:</h4>
            <p>+34 654 567 890</p>
            <h4>Address:</h4>
            <p>Calle de la casa de paz, 1, 28001 Madrid</p>
            <h4>Languages:</h4>
            <p>English, Spanish, French</p>
 */}
 
            <Grid item md={9}>
            <h2 style={{ color: "white", textAlign: "center", marginBottom: "4rem"}}>My interests</h2>
            <Container>
            <Grid container item md={12} className="interests">
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <VideogameAssetIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Games</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <MusicNoteIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Music</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <FlightTakeoffIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Travel</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <AndroidIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Android</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <MovieIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Movies</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <FastfoodIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Food</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <FitnessCenterIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Excercise</p>
                  </div>
                </Box>
              </Grid>
              <Grid item md={3} className='grid-interests'>
                <Box
                
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '10px',
                    backgroundColor: "#252A2E",
                    transition: 'background-color 1s',
                    "&:hover": {
                      backgroundColor: "#1CB698",
                      
                    },
                  }}
                >
                  <div className="interest-container">
                    <StyleIcon sx={{color: 'white'}} />
                    <p  style={{ color: "white", fontWeight: 'bold'}}>Nature</p>
                  </div>
                </Box>
              </Grid>
              
              
            </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
};

export default About;
