// page.jsx

'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Navbar from './components/navbar';
import styles from "./css/main.css";
import style from "./css/mainrespons.css";
import miImagen from './images/1mb.jpeg';


export default function Portafolio() {
  const [copiadoCorreo, setCopiadoCorreo] = useState(false);
  const [copiadoTelefono, setCopiadoTelefono] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initScrollReveal('.personaldata', 'bottom');
      initScrollReveal('.lenguajes', 'left');
      initScrollReveal('.projects', 'right');
      initScrollReveal('.contactme', 'bottom');
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
        <h2>LENGUAJES QUE HE TRABAJADO</h2>
        <ul>
          <li>
            <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={40} height={40} alt="" />SWIFT
          </li>
          <li>
            <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width={40} height={40} alt="" />HTML
          </li>
          <li>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={40} height={40} alt="" />CSS
          </li>
          <li>
            <Image src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" width={40} height={40} alt="" />NEXTJS
          </li>
          <li>
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={40} height={40} alt="" />PYTHON
          </li>
          <li>
            <Image src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" width={40} height={40} alt="" />MYSQL
          </li>
          <li>
            <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />NODEJS
          </li>
        </ul>
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
