import React from 'react'
import { Box, Grid, Button, Container } from '@mui/material'
import './Experience.css'
import IconoProvisorio from '../../assets/iconoProvisorio.png'
import TimelineVertical from '../../utils/TimelineVertical/TimelineVertical'

const Experience = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1,backgroundColor: 'black'}} >
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
            {/* <Grid item md={12} sx={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <img src={IconoProvisorio} alt='' width='40px' height='40px'/>
                <Grid>
                    <h2  style={{color: 'white'}}>Transferencias seguras</h2>
                    <p  style={{color: 'white'}}>Utilizamos servidores con servicios de seguridad de alto nivel. </p>
                </Grid>
                
            </Grid>
            <Grid item md={12} sx={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <img src={IconoProvisorio} alt='' width='40px' height='40px'/>
                <Grid>
                    <h2  style={{color: 'white'}}>Transferencias seguras</h2>
                    <p  style={{color: 'white'}}>Utilizamos servidores con servicios de seguridad de alto nivel. </p>
                </Grid>
            </Grid>
            <Grid item md={12} sx={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <img src={IconoProvisorio} alt='' width='40px' height='40px'/>
                <Grid>
                    <h2  style={{color: 'white'}}>Transferencias seguras</h2>
                    <p  style={{color: 'white'}}>Utilizamos servidores con servicios de seguridad de alto nivel. </p>
                </Grid>
            </Grid>
            <Grid item md={12} sx={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <img src={IconoProvisorio} alt='' width='40px' height='40px'/>
                <Grid sx={{ justifyContent: 'center'}}>
                    <h2  style={{color: 'white'}}>Transferencias seguras</h2>
                    <p  style={{color: 'white'}}>Utilizamos servidores con servicios de seguridad de alto nivel. </p>
                </Grid>
            </Grid> */}
            <TimelineVertical />
          </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Experience