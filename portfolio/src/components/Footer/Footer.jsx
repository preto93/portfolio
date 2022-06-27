import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid } from '@mui/material'
import './Footer.css';

const Footer = () => {
  return (
    <> 
    <div className="footer-back" style={{backgroundColor: 'black'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Grid className='grid-icons'>
              <GitHubIcon sx={{color: 'white'}}/>
              <FacebookIcon sx={{color: 'white'}} />
              <InstagramIcon sx={{color: 'white'}}/>
              <LinkedInIcon sx={{color: 'white'}} />  
        </Grid>
        </div>
        
        <Grid sx={{textAlign: 'center', paddingTop: '1rem'}} >
        <label style={{color: 'white'}}>© Copyright 2022 B1che. All rights reserved.</label>
        </Grid>
    </div>
    </>
  )
}

export default Footer