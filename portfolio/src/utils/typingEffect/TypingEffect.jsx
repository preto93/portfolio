import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {Grid} from '@mui/material'
import './TypingEffect.css'
const TypingEffect = () => {
  return (
    <>
      
    <Grid item sm={8} md={12}>
      <ReactTypingEffect
        text={["SOFTWARE  DEVELOPER"]}
        cursorRenderer={cursor => <h1 style={{display: 'none'}}>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color: '#E94560', fontSize: '60px'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      </Grid>
    </>
  );
};

export default TypingEffect;