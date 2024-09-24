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
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945054.png?f=webp&w=256" width={40} height={40} alt="" />
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

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">Harmony &amp; Heaven</div>
            <div className="categorie1">Group</div>
            <div className="lenguajesprj1">
              <Image src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945054.png?f=webp&w=256" width={40} height={40} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>CRUD Instrument Store, Inventory and Point of Sale.</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Harmony &amp; Heaven was developed as an inventory for an instrument store where products would be recorded with &quot;units for sale&quot;, &quot;product price&quot;, and &quot;category&quot;, in addition, the point of sale was created for the customer where they can add any product available in the store to the cart.</p>
              <p>In the Seller section, Harmony &amp; Heaven has a search engine and data filtering to facilitate the collection of products, it also has an order manager for the Product Supplier where they will be registered when they are requested and when they are received to be in stock, automatically adding the quantities received in the inventory, as well as a dashboard to see summaries of sales, employees, and other things.</p>
              <p>Products can be edited or deleted if necessary.</p>

              <p>In the customer section &quot;Point of sale&quot;, the customer will only be able to see the products in stock and add them to the cart for purchase, the total price for the products to be purchased will always be shown until the purchase is made.</p>
            </div>
            <div className="photoprj1">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'> 
            <a href="https://github.com/AmbrizAlberto/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>See on GitHub</a>
            </button>
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
              <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>Video game developed 100% with the Pygame Python library</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Pick Em&apos; Everithing is a video game dedicated to children with a focus on caring for the environment. Arthur &quot;the main character of the game&quot; will collect garbage throughout his adventure to take it to the garbage truck, referring to the responsibility of keeping a clean environment. place.</p> 
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              Pick Em&apos; Everithing has:
              <br />| MAIN MENU -- Spanish / English |
              <br />| LEVEL MENU -- 3 Levels |
              <br />| MUSIC WITHIN THE PROGRAM |
              <br />| SETTINGS -- Remove music, change language |            
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                All elements of the video game are original and completely created from scratch by the developers, from buttons to objects, even the character himself.
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>See on GitHub</a>
            </button>
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
            <div className="categorie1">Group</div>
            <div className="lenguajesprj1">
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" width={200} height={200} alt="" />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>A web blog for technology lovers.</h4>
            </div>
            <div className='descriptionprj3'>
              <p>BuggBlock is a Blog-type website focused on technological information where registered users can make publications with text and photos to later see them in the Main</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              BuggBlock was developed with PHP to manage user data and posts on the Backend side, and the design was made with Bootstrap icons and pure CSS.            
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/BuggBlock.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>See on GitHub</a>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;
