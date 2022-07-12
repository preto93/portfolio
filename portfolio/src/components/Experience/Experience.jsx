import React from 'react'
import { Box, Grid, Button, Container } from '@mui/material'
import './Experience.css'
import IconoProvisorio from '../../assets/iconoProvisorio.png'
import TimelineVertical from '../../utils/TimelineVertical/TimelineVertical'
import Lights from '../../utils/Lights/Lights'
import Fade from 'react-reveal/Fade';


const Experience = () => {
  return (
    <>
    
    <div className="container-experience">
      <Lights />
      
      <Box className="center-experience" color="white">
        <Container>
          <Grid container item >
            <Grid item xs={12} md={6} sx={{height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={12} sx={{padding: '3rem'}}>
              <Fade duration={3000}>
                <div className="div-left">
                  
                    <label className="experience-title animated">Work Experience</label>

                  
              </div> 
              </Fade> 
              </Grid>
            
            
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Fade duration={3000}>
              <TimelineVertical />
              </Fade>
            </Grid>
          </Grid>
          </Container>
        </Box>
    </div>
   
    </>
  )
}

export default Experience