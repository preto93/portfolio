import React from "react";
import "./Home.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Back from '../../assets/back.jpg';

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: 'black' }} >
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Grid item md={12}>
              <div className="divider">
                <label className="title">Software Developer</label>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="divider">
                <label className="subtitle" style={{color: 'white'}}>Hello, I’m Benjamin Thomson. I Have 8 years of experience in Web and UX design.
                 I am worked on a variety of brands and with agencies both big and small.
                </label>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="divider">
                <Button>Hire me now</Button>
                <Button>Download CV</Button>
              </div>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid item md={12}>
              <div className="divider">
                <img src={Back} alt='back' />

              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
