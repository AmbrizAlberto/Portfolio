// page.jsx

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Navbar from './components/navbar';
import styles from "./css/main.css";
import stylerespons from "./css/mainrespons.css";
import miImagen from './images/1mb.jpeg';


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
              <Image src={miImagen} width={400} height={400} alt="" />
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
      <div className="lenguajes">
        <h2>TECNOLOGIAS</h2>


        <div class="grid-containertec">
          <div class="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width={40} height={40} alt="" />
                <p>HTML</p>
              </div>
              <div class="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={40} height={40} alt="" />
                <p>CSS</p>
              </div>
              <div class="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width={40} height={40} alt="" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div class="grid-itemtec">
            <h2>Backend</h2>
            <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://camo.githubusercontent.com/57849c6a718458e32ed51527a073b72d8f1737ee515ab6f80d5a9107a485f40c/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f37353934312f313635373730373837382d6e6578746a735f6c6f676f2e706e67" width={40} height={40} alt="" />
                <p>NextJS</p>
              </div>
              <div class="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
                <p>MySQL</p>
              </div>
              <div class="image-with-text">
                <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
                <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div class="grid-itemtec">
            <h2>Aprendiendo</h2>
            <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={40} height={40} alt="" />
                <p>Swift</p>
              </div>
              <div class="image-with-text">
                <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={40} height={40} alt="" />
                <p>Python</p>
              </div>
            </div>

          </div>
          <div class="grid-itemtec">
            <h2>Herramientas</h2>

          </div>

        </div>
      
      </div>
      
      <div className='projects'>
        <h2>PROYECTOS</h2>
        <div className="grid-containerprj">
          <button className="container-project">
            <div className="nameprj">Harmony & Heaven</div>
            <div className="categorie">Grupal</div>
            <div className="photoprj">
              <Image src="" alt="" width={40} height={40} />
            </div>
            <div className="descriptionprj">
              <h4>Tienda de instrumentos con CRUD, Inicio de sesión y Punto de venta.</h4>
            </div>
            <div className="lenguajesprj">
              <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
              <Image src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" width={40} height={40} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-github"></i>Ver Repositorio
            </div>
          </button>
        </div>
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
      </div>
      <Head>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
        <script src='script/scrollreveal.js' async defer />
      </Head>
    </div>
  );
}
