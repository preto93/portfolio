import React from 'react'
import { Box, Grid, Button, Container } from '@mui/material'
import './Experience.css'
import IconoProvisorio from '../../assets/iconoProvisorio.png'
import TimelineVertical from '../../utils/TimelineVertical/TimelineVertical'
import Lights from '../../utils/Lights/Lights'

const Experience = () => {
  return (
    <>

    <div className="container-experience">
      <Lights />
      
      <Box className="center-experience" color="white">
          <Container>
          <Grid container item >
            <Grid item xs={12} md={6} sx={{height: '70vh', display: 'flex', alignItems: 'center'}}>
              <Grid item md={12} sx={{padding: '3rem'}}>
                <div className="div-left">
                  <label className="experience-title">Work Experience</label>
                  <br />
                  <label className="experience-subtitle" style={{color: 'white'}}>Mas sobre la tecnologia
                  </label>
              </div>  
              </Grid>
            
            
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
              <TimelineVertical />
            </Grid>
          </Grid>
          </Container>
        </Box>
    </div>
    
    </>
  )
}

export default Experience