import React from 'react';
import Spinner from './spinner';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <h1>Cargando...</h1>
      <Spinner/>
    </div>
  );
};

export default LoadingScreen;