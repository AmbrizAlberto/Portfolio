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
      <h2 id='project'>PROJECTS</h2>

      <div className="grid-containerprj">

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">Notes App</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>Notes application for iOS</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">Car Recognition</div>
            <div className="categorie">Personal</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>Car recognition in videos with Python</h4>
            </div>
            <div className="lenguajesprj">
              <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>View project
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
          <div className="nameprj">Number Recognition</div>
          <div className="categorie">Personal</div>
          <div className="photoprj">

          </div>
          <div className="descriptionprj">
            <h4>Digit recognition program drawn by the user</h4>
          </div>
          <div className="lenguajesprj">
            <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>View project
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
              <h4>Car recognition in videos with python using Yolov5</h4>
            </div>
            <div className='descriptionprj2'>
              <p>Any car detected in the video will appear marked within a red square with its label</p>
              <p>The program allows changing the color from the code, and it is limited to only detecting vehicles, although this can be easily removed by deleting the function from the code.</p>
              <p>It is necessary to install Yolov5 with pip</p>
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/AmbrizAlberto/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
              <h4>Notes application for iOS developed with SwiftUI</h4>
            </div>
            <div className='descriptionprj2'>
              <p>A personal project to learn the basics of iOS development</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              With Notes APP you can create, edit, and delete a note: 
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                Try it with Xcode
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
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
              <h4>A web blog for tech enthusiasts.</h4>
            </div>
            <div className='descriptionprj3'>
              <p>BuggBlock is a Blog-type website focused on technology information where registered users can make posts with text and photos to later view them in the Main section</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              BuggBlock was developed with PHP for managing user data and posts on the Backend side, and the design was done with Bootstrap icons and pure CSS.
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/AmbrizAlberto/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>View on GitHub</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;

