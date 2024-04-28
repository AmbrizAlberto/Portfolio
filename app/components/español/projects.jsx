// projects.jsx
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
            <div className="categorie">Grupal</div>
            <div className="photoprj">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Tienda de instrumentos con CRUD, Inicio de sesión y Punto de venta.</h4>
            </div>
            <div className="lenguajesprj">
              <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i class="bi bi-eye-fill"></i>Ver proyecto
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">Pick Em&apos; Everithimg</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Videojuego desarrollado con la libreria Pygame de Python</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">BuggBlock</div>
          <div className="categorie">Grupal</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Web Blog informatico enfocado a la tecnologia y computadoras, los usuarios pueden hacer nuevas publicaciones y el admin borrarlas</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://static-00.iconduck.com/assets.00/php-icon-2048x2048-jyo8hbbt.png" width={200} height={200} alt="" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
            <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i class="bi bi-eye-fill"></i>Ver proyecto
          </div>
        </button>

      </div>

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Harmony &amp; Heaven</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
              <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Tienda de instrumentos CRUD, Inventario y Punto de venta.</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Harmony &amp; Heaven se desarrollo como un inventario para una tienda de instrumentos donde se registraran los productos con &quot;unidades a la venta&quot;, &quot;precio del producto&quot; y &quot;categoria&quot;, ademas se creo el punto de venta para el cliente donde podra añadir al carrito cualquier producto disponible de la tienda.</p>
              <p>En el apartado de Vendedor, Harmony &amp; Heaven cuenta con un motor de busqueda y filtrado de los datos para facilitar la recoleccion de productos, tambien cuenta con un gestor de pedidos al Provedor de productos donde se registraran cuando se soliciten y cuando se reciban para estar en stock añadiendose automaticamente las cantidades recibidas en el inventario, asi como un dashboard para ver resumenes de ventas, empleados y demas cosas.</p>
              <p>Los productos se pueden editar o eliminar de ser necesario.</p>

              <p>En el apartado de cliente --punto de venta--, el cliente podra unicamente ver los productos en stock y añadirlos al carrito para su compra, el precio total por los productos a comprar se mostrara siempre hasta realizar la compra.</p>
          </div>
          <div className="photoprj1">
            <Image src={HyH} alt="" width={"auto"} height={"auto"} />
          </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "PickEmE" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Pick Em&apos; Everithing</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
              <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Videojuego desarrollado 100% con la libreria Pygame de Python</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Pick Em&apos; Everithing es un videojuego dedicado para niños con el enfoque del cuidado del medio ambiente, Arthur --el personaje principarl del juego-- ira recogiendo basura a lo largo de su aventura para llevarla al camion recolector, haciendo referencia a la responsabilidad de mantener limpio un lugar.</p>
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Pick Em&apos; Everithing cuenta con: 
                <br />| MENU PRINCIPAL -- Español / Ingles |
                <br />| MENU DE NIVELES -- 3 Niveles |
                <br />| MUSICA DENTRO DEL PROGRAMA |
                <br />| CONFIGURACION -- Quitar musica, cambiar idioma |
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Todos los elementos del videojuego son originales y completamente creados desde 0 por los desarroladores, desde botones hasta objetos incluso el mismo personaje. 
              </p>
            </div>


          </div>
        </div>
      )}

      {modalOpen && selectedProject === "BugB" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">BuggBlock</div>
            <div className="categorie1">Grupal</div>
            <div className="lenguajesprj1">
              <Image src="https://static-00.iconduck.com/assets.00/php-icon-2048x2048-jyo8hbbt.png" width={200} height={200} alt="" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
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
          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
