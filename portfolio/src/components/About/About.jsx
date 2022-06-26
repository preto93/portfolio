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


const About = () => {
  return (
    <><div style={{ backgroundColor: "#1F2226", marginTop: '1rem', marginBottom: '1rem', paddingTop: '1rem', paddingBottom: '1rem'}}>
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
            <Button variant="contained">Download CV</Button>
          </Grid>
          <Grid item md={9}>
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
             <h2 style={{ color: "white"}}>My interests</h2>
            <Grid container item md={12}>
              <Grid item md={4}>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <div className="interest-container">
                    <VideogameAssetIcon />
                    <p>Games</p>
                  </div>
                  
                </Box>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
};

export default About;
