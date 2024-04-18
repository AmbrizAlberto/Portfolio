// page.jsx

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Navbar from './components/navbar';
import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";
import miImagen from './images/1mb.jpeg';
import Tecnologias from './components/tecnologies';
import Proyectos from './components/projects';



export default function Portafolio() {
  const [copiadoCorreo, setCopiadoCorreo] = useState(false);
  const [copiadoTelefono, setCopiadoTelefono] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initScrollReveal('.personaldata', 'right');
      initScrollReveal('.lenguajes', 'right');
      initScrollReveal('.projects', 'right');
      initScrollReveal('.contactme', 'right');
    }
  }, []);

  async function initScrollReveal(selector, origin) {
    if (typeof window !== 'undefined') {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal(selector, {
        duration: 1000,
        origin: origin,
        distance: '20px',
        delay: 200,
        easing: 'ease-in-out',
      });
    }
  }

  async function copiarAlPortapapeles(id_elemento) {
    if (typeof window !== 'undefined') {
      const elemento = document.getElementById(id_elemento);
      if (elemento) {
        const aux = document.createElement('input');
        aux.setAttribute('value', elemento.innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
        setCopiadoCorreo(true);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos
        setCopiadoCorreo(false);
      }
    }
  }

  async function copiarTelefono(id_elemento) {
    if (typeof window !== 'undefined') {
      const elemento = document.getElementById(id_elemento);
      if (elemento) {
        const aux = document.createElement('input');
        aux.setAttribute('value', elemento.innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
        setCopiadoTelefono(true);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos
        setCopiadoTelefono(false);
      }
    }
  }

  return (
    <div className='main'>
      <Navbar />
      <div className="personaldata">
        <div className="datos1">
          <div className="photomia">
            <button type="button" className='photo'>
              <Image src={miImagen} width={"auto"} height={"auto"} alt="" />
            </button>
          </div>
          <div className="datos">
            <div className="nombre">
              Alberto Ambriz
            </div>
          </div>
        </div>
        <div className="datos2">
          <div className="aboutme">
            <h2>SOBRE MI...</h2>
            <div className='descriptionme'>
              Estudiante de Ingeniería en Software, me apasiona el desarrollo de aplicaciones (web/móvil), el diseño de estas es lo más entretenido para mí, estoy listo para trabajar de inmediato.
            </div>
          </div>
        </div>
      </div>


      <Tecnologias/>
      

      <Proyectos/>

      <div className="contactme">
        <h1 className="contactmett">CONTACTAME</h1>
        <h1>CORREO</h1>
        <div className="correo">
          <span id="url" className='correotxt'>albertpoambez@gmail.com</span>
          <button className='correobtn' onClick={() => copiarAlPortapapeles('url')}>
            {copiadoCorreo ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <h1>TELEFONO</h1>
        <div className="telefono">
          <span id="tel" className='correotxt'>+52 3141576598</span>
          <button className='correobtn' onClick={() => copiarTelefono('tel')}>
            {copiadoTelefono ? 'Copiado' : 'Copiar'}
          </button>
        </div>

      </div>
      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}
