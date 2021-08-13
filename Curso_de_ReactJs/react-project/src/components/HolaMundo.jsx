import React from 'react';
import logo from './react.png';

const HolaMundo = () => {
  const Hello = '¡Hola Mundo!!'
  const isTrue = true;
  return (
    <div className="HolaMundo">
      <h1>{Hello}</h1>
      <h2>Curso Esencial de ReactJs</h2>
      <img src={logo}  alt="React" />
      {
        isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>
      }
      {
        isTrue && <h4>Soy verdadero</h4>
      }
    </div>
  );
};

export default HolaMundo;