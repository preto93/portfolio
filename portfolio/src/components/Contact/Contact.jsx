import React from "react";
import "./Contact.css";
import { Grid, Container, Button } from "@mui/material";

const Contact = () => {
  return (
    
    <div  className="background-contact">
      <Container>
        <Grid>
          <h1 className="text-center" style={{textAlign: 'center', color: 'white', fontSize: '40px', marginTop: '0px'}}>Contacto</h1>
          <h4 style={{textAlign: 'center', fontSize: '16px', color: '#a6a6a6'}}>
            Contactame completando el formulario o con alguna de las opciones
          </h4>
        </Grid>
        <Grid container >
          <Grid item md={6} className="grid-izq">
            <label className='label-contacto' style={{fontWeight: 'bold'}}>
              Utiliza las siguientes vías de contacto, o rellena el formulario.{" "}
            </label>
            <br />
            <label className='label-contacto'>Via E-Mail. </label>
            <label className='label-contacto'>snmedina91@gmail.com</label>
            <br />
            <label className='label-contacto'>En mi Linkedin. </label>
            <label className='label-contacto'>linkedin.com/snmedina91</label>
            <br />
            <label className='label-contacto'>O por telefono. </label>
            <label className='label-contacto'>+54 11 2399-0779</label>
          </Grid>
          <Grid item md={6} className='grid-contacto grid-izq'>
            <input type="text" placeholder="escribe tu nombre" />
            <input type="text" placeholder="escribe tu Enail" />
            <input type="text" placeholder="escribe tu Telefono" />
            <textarea placeholder="Escribe tu mensaje" />
            <Button variant='outlined'>Enviar</Button>
          </Grid>
        </Grid>
      </Container>
      </div>
    
  );
};

export default Contact;
