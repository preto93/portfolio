import React from "react";
import "./About.css";
import { Grid, Divider, Box } from "@mui/material";

const About = () => {
  return (
    <>
      <h1>About ME</h1>

      <Grid container xs={12}>
        <Grid item md={3}>
          <p>IMAGEN MIA</p>
        </Grid>
        <Grid item md={9}>
          <h2>Sebastian Medina</h2>
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

          <h2>What IM Doing</h2>
          <Grid container md={12}>
            <Grid item md={4}>
          <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
            </Grid>
            <Grid item md={4}>
          <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
            </Grid>

            <Grid item md={4}>
          <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
            />
            </Grid>
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
