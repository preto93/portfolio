import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Background from '../../assets/background.png';

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, }} className="backgroundHome">
        <Grid container item spacing={2}>
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
              <div className="divider" style={{ height: '0vh'}}>
                
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
