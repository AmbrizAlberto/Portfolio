// page.jsx

'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";

import miImagen from './images/1mb.jpeg';

import Navbar from './components/navbar';
import Tecnologias from './components/tecnologies';
import Proyectos from './components/projects';
import Contactame from './components/contactme';


export default function Portafolio() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initScrollReveal('.personaldata', 'bottom');
      initScrollReveal('.lenguajes', 'inherit');
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
        distance: '10px',
        delay: 200,
        easing: 'ease-in-out',
      });
    }
  }

  const downloadCV = "./CV.pdf";

  return (
    <div className='main'>
      
      <Navbar />

      <div className="personaldata">
        <div className="datos1">
          <div className="photomia">
            <a href={downloadCV} download="CV - Alberto Ambriz.pdf">
              <Image src={miImagen} width={"auto"} height={"auto"} priority={true}  alt="" />
            </a>
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

      <div className='btnlinks'>
        <button>
          <a href="https://www.linkedin.com/in/alberto-ambriz-chavez/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </button>
        <button>
          <a href="https://github.com/ambrizalberto/" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </button>
        <button>
          <a href={downloadCV} download="CV - Alberto Ambriz.pdf">
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </button>
      </div>
      

      <Tecnologias/>

      <Proyectos/>

      <Contactame/>

      <div className='creador'>
        <h4>Estilo de portafolio con derechos reservados <i className="bi bi-c-circle"></i></h4>
        <h4>Portafolio web realizado con NextJS</h4>
        <i className="bi bi-github"></i>  /AmbrizAlberto
      </div>
      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}
