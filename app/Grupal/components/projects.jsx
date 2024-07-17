import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';

import HyH from '../../images/HarmonyAndHeavenM.jpg';
import HyH1 from '../../images/HarmonyAndHeavenL.jpg';



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
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={HyH} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Tienda de instrumentos con CRUD - Inventario y Punto de venta.</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

    {/* Modales */}

    </div>
  );
}

export default Proyectos;
