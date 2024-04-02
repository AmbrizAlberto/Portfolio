/* https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png - NEXTJS ICON */


import React from 'react'
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from "./css/main.css"
import style from "./css/mainrespons.css"
import Navbar from './components/navbar';

export default function Portafolio() {

  return (
    <div className='main'>
      
      <Navbar/>
      
      <div className="personaldata">
        
        <div className="datos1">
          <div className="photomia">
            <button type="button" className='photo'>
              <img src='./1mb.jpeg' alt="" />
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
            <div className='descriptionme'></div>
            Estudiante de Ingenieria en Software, me apasiona el desarrollo de aplicaciones (web/móvil), el diseño de estas es lo más entretenido para mí, estoy listo para trabajar de inmediato.
          </div>
        </div>
          

      </div>




      
      <div className="lenguajes">
        <h2>LENGUAJES QUE HE TRABAJADO</h2>

        <ul>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />HTML
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="" />CSS</li>
          <li>
            <img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="" />NEXTJS</li>
          <li>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" alt="" />PYTHON</li>
          <li>
            <img src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" alt="" />MYSQL</li>
            <li>
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />NODEJS</li>
        </ul>
        
      </div>




      <div className='projects'>
        <h2>PROYECTOS</h2>

      <div className="grid-containerprj">

        <button className="container-project">

          <div className="nameprj">Harmony & Heaven</div>
          <div className="categorie">
            Grupal
          </div>
          <div className="photoprj">
            <img src="" alt="" />
          </div>
          <div className="descriptionprj">
            <h4>Tienda de intrumentos con CRUD, Inicio de sesion y Punto de venta.</h4>
          </div>
          <div className="lenguajesprj">
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" alt="" />
          </div>
          <div className="github">
            <i className="bi bi-github"></i>Ver Repositorio
          </div>

        </button>

        <button className="container-project">

          <div className="nameprj">Harmony & Heaven</div>
          <div className="categorie">
            Grupal
          </div>
          <div className="photoprj">
            <img src="" alt="" />
          </div>
          <div className="descriptionprj">
            <h4>Tienda de intrumentos con CRUD, Inicio de sesion y Punto de venta.</h4>
          </div>
          <div className="lenguajesprj">
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" alt="" />
          </div>
          <div className="github">
            <i className="bi bi-github"></i>Ver Repositorio
          </div>

        </button>

        <button className="container-project">

          <div className="nameprj">Harmony & Heaven</div>
          <div className="categorie">
            Grupal
          </div>
          <div className="photoprj">
            <img src="" alt="" />
          </div>
          <div className="descriptionprj">
            <h4>Tienda de intrumentos con CRUD, Inicio de sesion y Punto de venta.</h4>
          </div>
          <div className="lenguajesprj">
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" alt="" />
          </div>
          <div className="github">
            <i className="bi bi-github"></i>Ver Repositorio
          </div>

        </button><button className="container-project">

          <div className="nameprj">Harmony & Heaven</div>
          <div className="categorie">
            Grupal
          </div>
          <div className="photoprj">
            <img src="" alt="" />
          </div>
          <div className="descriptionprj">
            <h4>Tienda de intrumentos con CRUD, Inicio de sesion y Punto de venta.</h4>
          </div>
          <div className="lenguajesprj">
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
            <img src="https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png" alt="" />
          </div>
          <div className="github">
            <i className="bi bi-github"></i>Ver Repositorio
          </div>

        </button>

      </div>
      </div>

      
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </div>

    
  )
}
