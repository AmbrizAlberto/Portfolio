// layout.jsx

'use client'; // Marca el componente como un componente de cliente
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
        {/* Aquí puedes agregar tus etiquetas <head> */}
      </head>
      <body>
        <div className="main">
          {loading ? ( // Si loading es verdadero, muestra el spinner de carga
            <LoadingScreen />
          ) : (
            children // Si loading es falso, muestra el contenido de la página
          )}
        </div>
      </body>
    </html>
  );
}
