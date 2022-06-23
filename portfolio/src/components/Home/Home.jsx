import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from '@mui/material'
import TypingEffect from "../../utils/typingEffect/TypingEffect"




const Home = () => {


  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="backgroundHome">
        <Container>
        <Grid container item spacing={2}>
          <Grid item xs={12} md={12}>
            <Grid item md={12} >
                <h1 className="stroked"> SEBASTIAN MEDINA</h1>
            </Grid>
            <Grid item md={12} >
              <TypingEffect />
            </Grid>
            <Grid item md={12}>
                <Button variant="outlined" className="button-home">Hire me now</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="outlined" className="button-home" >Download CV</Button>             
            </Grid>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
