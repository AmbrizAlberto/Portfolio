  // pageen.jsx

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import styles from "../css/main.css";
import stylerespons from "../css/mainrespons.css";

import miImagen from '../images/1mb.jpeg';

import NavbarEN from './navbaren';
import TecnologiasEN from './tecnologiesen';
import ProyectosEN from './projectsen';
import ContactameEN from './contactmeen';
import AboutmeEN from './aboutmeen';
import CreatorEN from './creatoren'

  const PortafolioEN = () => {

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
        
        <NavbarEN />
        <AboutmeEN/>        
        <TecnologiasEN />
        <ProyectosEN />
        <ContactameEN />
        <CreatorEN/>

        
        <Head>
          <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
          <script src='script/scrollreveal.js' async defer />
        </Head>
      </div>
    );
  };

  export default PortafolioEN;
