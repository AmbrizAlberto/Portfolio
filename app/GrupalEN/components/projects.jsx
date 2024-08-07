import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

import HyH from '../../images/HarmonyAndHeavenM.jpg';
import HyH1 from '../../images/HarmonyAndHeavenL.jpg';
import PEE from '../../images/PickEm.jpg';
import PEE1 from '../../images/PickEm1.jpg';
import PEE2 from '../../images/PickEm2.jpg';
import BB from '../../images/BB1.jpg';
import BB1 from "../../images/BB2.jpeg";


import "../../css/modal.css";
import "../../css/project.css";

const Proyectos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModalForProject = (projectId) => {
    setSelectedProject(projectId);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className='projects' >
      <h2 id='proyecto'>PROYECTOS</h2>

      <div className="grid-containerprj">

      <button className="container-project" onClick={() => openModalForProject("harmony_heaven")}>
            <div className="nameprj">Harmony &amp; Heaven</div>
            <div className="categorie">Group</div>
            <div className="photoprj">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Instrument Store with CRUD, Login and Point of Sale.</h4>
            </div>
            <div className="lenguajesprj">
              <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
            </div>
            <div className="github">
            <i class="bi bi-eye-fill"></i>See project
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">Pick Em&apos; Everithing</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Video game developed with the Pygame Python library</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>See project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">BuggBlock</div>
          <div className="categorie">Group</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Web Computer blog focused on technology and computers, users can make new posts and the admin can delete them</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://static-00.iconduck.com/assets.00/php-icon-2048x2048-jyo8hbbt.png" width={200} height={200} alt="" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>See project
          </div>
        </button>

        
      </div>
      <br/><br/><br/><br/>

      {modalOpen && selectedProject === "Pixels" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Pixels</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width={200} height={200} alt="" />
              <Image src="https://seekicon.com/free-icon-download/next-js_1.png" width={200} height={200} alt="" />
              <Image src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254224/prisma-icon-md.png" width={200} height={200} alt="" />
              <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PX1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <h4>Red social para fotografos, los usuarios compartiran sus fotografias y se mostraran metadatos de estas, las fotografias no podran ser robadas.</h4>
            </div>
            <div className="photoprj1">
              <Image src={PX2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>El principal objetivo de Pixels es ser una red social 100% enfocada en fotografia con las novedades de ofrecer alta seguridad para sus usuarios permitiendo incluso la venta de su arte exclusivamente.</p>
            </div>
            <div className="photoprj1">
              <Image src={PX3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>Pixels aun esta en desarrollo por lo que aun faltan muchas funciones por implementar.</p>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://pixels-flax.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>Ver en Produccion</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/AmbrizAlberto/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "CarRecognition" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Car Recognition</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
                <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={CR1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Reconocimiento de coches en videos con python utilizando Yolov5</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Cualquier coche que aparezca detectado en el video aparecera carcado dentro de un cuadrado rojo con su etiqueta</p>
              <p>El programa facilita el cambio de color desde el codigo, ademas esta limitado a soloamente detectar los vehiculos, aunque realmente eso se puede quitar facilmente eliminando solo la duncion desde el codigo.</p>

              <p>Es necesario instalar Yolov5 con pip</p>
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/AmbrizAlberto/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "NoteApp" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Notes APP</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">
                <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Aplicacion de Notas para iOS desarrollada con SwiftUI</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Un proyecto personal para conocer y aprender las bases del desarrollo para iOS</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Con Notes APP se puede crear, editar y borrar una nota: 
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Pruebala con Xcode
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "NumberRecog" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Number Recognition</div>
            <div className="categorie1">Personal</div>
            <div className="lenguajesprj1">

            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Un web blog para amantes de la tecnologia.</h4>
            </div>
            <div className='descriptionprj3'>
              <p>BuggBlock es una pagina web tipo Blog con enfoque a informacion tecnologica donde los usuarios registrados podran realizar publicaciones con texto y fotos para despues verlas en el Main</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              BuggBlock fue desarrollado con php para el manejo de datos de usuarios y publicaciones por el lado del Backend, y el diseño realizado con iconos de Bootstrap y CSS puro. 
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>Ver en GitHub</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
