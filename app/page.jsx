'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";

import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Tecnologias from './components/tecnologies';
import Proyectos from './components/projects';
import Contactame from './components/contactme';
import Creador from './components/creator';

import { useLanguage } from './context/LanguageContext';

export default function Portafolio() {
  const { toggleLanguage } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const downloadCV = "./CVES.pdf";
  const downloadCVEN = "./CVEN.pdf";

  useEffect(() => {
    const checkIfLoaded = () => {
      const mainContent = document.querySelector('.main-content');
      return mainContent && mainContent.style.visibility === 'visible';
    };

    if (checkIfLoaded()) {
      setIsLoaded(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (checkIfLoaded()) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      observer.observe(mainContent, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    const fallbackInterval = setInterval(() => {
      if (checkIfLoaded()) {
        setIsLoaded(true);
        clearInterval(fallbackInterval);
      }
    }, 100);

    return () => {
      observer.disconnect();
      clearInterval(fallbackInterval);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      const initDelay = setTimeout(() => {
        initScrollReveal('.personaldata', 'bottom');
        initScrollReveal('.lenguajes', 'bottom');
        initScrollReveal('.projects', 'bottom');
        initScrollReveal('.contactme', 'bottom');
      }, 200);

      return () => clearTimeout(initDelay);
    }
  }, [isLoaded]);

  async function initScrollReveal(selector, origin) {
    if (typeof window !== 'undefined') {
      try {
        const ScrollReveal = (await import('scrollreveal')).default;
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
          ScrollReveal().reveal(selector, {
            duration: 1000,
            origin: origin,
            distance: '0px',
            delay: 100,
            easing: 'ease-in-out',
            reset: false,
            viewFactor: 0.1
          });
          console.log(`ScrollReveal aplicado a: ${selector}`);
        } else {
          console.warn(`No se encontraron elementos para: ${selector}`);
        }
      } catch (error) {
        console.error('Error al cargar ScrollReveal:', error);
      }
    }
  }

  return (
    <div className='main'>
      <div className='btnlinks'>
        <button>
          <a href="https://www.linkedin.com/in/albertoambriz/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </button>
        <button>
          <a href="https://github.com/byQuesters/" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </button>
        <button>
          <a href="https://www.instagram.com/byquesters?stkn=MTRiZ3N2OXp2NjNxbA%3D%3D&utm_source=qr/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
        </button>
        <button>
          <a href="https://music.apple.com/profile/byquesters" target="_blank">
            <i className="bi bi-apple-music"></i>
          </a>
        </button>
      </div>
  
      <>
        <Navbar/>
        <Aboutme/>        
        <Tecnologias />
        <Proyectos />
        <Contactame />
        <Creador/>
      </>

      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}