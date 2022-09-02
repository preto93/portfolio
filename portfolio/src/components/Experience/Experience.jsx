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
    
    <div className="container-experience" id="experience">    
      <Lights />
      
      <Box className="center-experience" color="white" sx={{maxWidth: '100%', maxHeight: '100%'}}>
        <Container >
          <Grid container item >
            <Grid item xs={12} md={5} sx={{height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Grid item md={12} sx={{padding: '3rem'}}>
              <Fade duration={3000}>
                
                  <label className="experience-title animated">Work Experience</label>
              
              </Fade> 
              </Grid>
            </Grid>
            <Grid item xs={12} md={7} className='timeline-container'>
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