// layout.jsx

'use client';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Simula un tiempo de carga utilizando un temporizador
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Limpieza del temporizador al desmontar el componente
      return () => clearTimeout(timer);
    }
  }, []);
  

  return (
    <html className="html">
      <head>
        <title>Portfolio - Alberto Ambriz</title>
        <meta name="description" content="Projects & trayectory of a Software Developer"/>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4100/4100416.png" />
      </head>
      <body>
          {loading ? (
            <LoadingScreen />
          ) : (
            children
          )}
      </body>
    </html>
  );
}
