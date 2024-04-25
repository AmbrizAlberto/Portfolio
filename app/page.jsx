// page.jsx
'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";

import miImagen from './images/1mb.jpeg';

import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Tecnologias from './components/tecnologies';
import Proyectos from './components/projects';
import Contactame from './components/contactme';
import Creador from './components/creator';

import PortafolioEN from './components/pageen';
import NavbarEN from './components/navbarEN';
import AboutmeEN from './components/aboutmeen';
import TecnologiasEN from './components/tecnologiesEN';
import ProyectosEN from './components/projectsEn';
import ContactameEN from './components/contactmeen';
import CreadorEN from './components/creatorEN';

export default function Portafolio() {
  const [english, setEnglish] = useState(true); // Set initial state to true for English version

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initScrollReveal('.personaldata', 'bottom');
      initScrollReveal('.lenguajes', 'bottom');
      initScrollReveal('.projects', 'bottom');
      initScrollReveal('.contactme', 'bottom');
    }
  }, []);

  async function initScrollReveal(selector, origin) {
    if (typeof window !== 'undefined') {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal(selector, {
        duration: 1000,
        origin: origin,
        distance: '10px',
        delay: 100,
        easing: 'ease-in-out',
      });
    }
  }

  const downloadCV = "./CV.pdf";

  return (
    <div className='main'>

      <div className='btnlinks'>
        <button onClick={() => setEnglish(!english)}>
            <i className="bi bi-translate"></i>          
          </button>
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
  
      {english ? (
        <>
          <NavbarEN/>
          <AboutmeEN/>        
          <TecnologiasEN />
          <ProyectosEN />
          <ContactameEN />
          <CreadorEN/>
        </>
      ) : (
        <>
          <Navbar />
          <Aboutme/>
          <Tecnologias />
          <Proyectos />
          <Contactame />
          <Creador/>
        </>
      )}


      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}
