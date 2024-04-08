'use client';

import React from 'react';
import "./spinner.css"; // Corrige el nombre del archivo aquí

const Spinner = () => {
  return (
    <div className="spinner">
      {/* Agrega aquí la animación de carga */}
      <div className="spinner-circle"></div>
    </div>
  );
};

export default Spinner;
