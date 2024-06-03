import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

import CR from '../../images/CR.png';
import CR1 from '../../images/CR1.png';
import CR2 from '../../images/CR2.png';
import NtePV from '../../images/NotePV.jpeg';
import Nte from '../../images/Note.png';
import Nte1 from '../../images/Note1.png';
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

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">Notes App</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Aplicacion de Notas para iOS</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">Reconocimiento de Carros</div>
            <div className="categorie">Personal</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Reconocimiento de carros en videos con Python</h4>
            </div>
            <div className="lenguajesprj">
              <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>Ver proyecto
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
          <div className="nameprj">Number Recognition</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">

          </div>
          <div className="descriptionprj">
            <h4>Programa de reconocimiento de digitos dibujados por el usuario</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

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
