// layout.jsx

'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Simulamos un tiempo de carga utilizando un temporizador
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Limpieza del temporizador al desmontar el componente
      return () => clearTimeout(timer);
    }
  }, []);
  

  // Renderiza el contenido de la página solo si loading es falso
  return (
    <html className="html">
      <head>
        <title>Portafolio - Alberto Ambriz</title>
        <meta name="description" content="Proyectos y trayectoria de un desarrollador de software" />
        {/* Usa la variable miImagen en el atributo href del enlace */}
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4100/4100416.png" />
        {/* Otras etiquetas meta, enlaces CSS, etc. */}
      </head>
      <body>
          {loading ? ( // Si loading es verdadero, muestra el spinner de carga
            <LoadingScreen />
          ) : (
            children // Si loading es falso, muestra el contenido de la página
          )}
      </body>
    </html>
  );
}
