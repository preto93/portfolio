import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingEffect = () => {
  return (
    <>
      

      <br />

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
                    style={{color: 'white', fontSize: '60px'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default TypingEffect;