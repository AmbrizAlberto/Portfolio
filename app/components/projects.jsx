import Image from 'next/image';
import { X } from 'react-feather';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

 // ICONS TECNOLOGIES
 import htmlpng from '../../public/icons/html5.png';
 import csspng from '../../public/icons/css3.png';
 import jspng from '../../public/icons/js.png';
 import reactpng from '../../public/icons/reactn.png';
 import nextpng from '../../public/icons/nextjs.png';
 import mysqlpng from '../../public/icons/mysql.png';
 import nodepng from '../../public/icons/nodejs.png';
 import gitpng from '../../public/icons/git.png';
 import githubpng from '../../public/icons/github.png';
 import terminalpng from '../../public/icons/terminal.png';
 import npm from '../../public/icons/npm.png';
 import swiftpng from '../../public/icons/swift.png';
 import pythonpng from '../../public/icons/python.png';
 import phppng from '../../public/icons/php.png';
 import prismapng from '../../public/icons/prisma.png';
 import vscodepng from '../../public/icons/vscode.png';
 
 // IMAGES PROJECTS
import CR from '../images/CR.png';
import CR1 from '../images/CR1.png';
import CR2 from '../images/CR2.png';
import NtePV from '../images/NotePV.jpeg';
import Nte from '../images/Note.png';
import Nte1 from '../images/Note1.png';
import PEE2 from '../images/PickEm2.jpg';
import BB from '../images/BB1.jpg';
import BB1 from "../images/BB2.jpeg";
import PX1 from "../images/PX1.jpeg";
import PX2 from "../images/PX2.jpeg";
import PX3 from "../images/PX3.jpeg";
import SMMain from "../images/SMMain.png"
import SMDb from "../images/SMDb.png"
import SMLg from "../images/SMLg.png"
import SM from "../images/SM.png"
import EQA1 from "../images/EQA1.png"
import EQAP from "../images/EQAP.png"
import StJ1 from '../images/StJ1.png';
import StJ2 from '../images/StJ2.png';
import StJ3 from '../images/StJ3.png';
import StJ4 from '../images/StJ4.png';
import HyH from '../images/HarmonyAndHeavenM.jpg';
import HyH1 from '../images/HarmonyAndHeavenL.jpg';
import PEE from '../images/PickEm.jpg';
import PEE1 from '../images/PickEm1.jpg';
import Spk1 from "../images/Spk1.jpeg"
import Spk2 from "../images/Spk2.jpeg"
import Spk3 from "../images/Spk3.jpeg"
import Spk4 from "../images/Spk4.jpeg"
import Spk5 from "../images/Spk5.jpeg"
import Spk6 from "../images/Spk6.jpeg"
import Spk7 from "../images/Spk7.jpeg"
import Spk8 from "../images/Spk8.jpeg"
import Spk9 from "../images/Spk9.jpeg"
import Spk10 from "../images/Spk10.jpeg"
import Spk11 from "../images/Spk11.jpeg"
import Spk12 from "../images/Spk12.jpeg"
import EF1 from "../images/EF1.PNG"
import EF2 from "../images/EF2.PNG"
import EF3 from "../images/EF3.PNG"
import EF4 from "../images/EF4.PNG"
import EF5 from "../images/EF5.PNG"
import EF6 from "../images/EF6.PNG"
import EF7 from "../images/EF7.PNG"
import EF8 from "../images/EF8.PNG"
import EF9 from "../images/EF9.PNG"
import EF10 from "../images/EF10.jpeg"
import NR1 from "../images/NR1.png"

import "../css/modal.css";
import "../css/project.css";

const Proyectos = () => {
  const { t } = useLanguage();
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
      <h2 id='proyecto'>{t.projects.title}</h2>

      <div className="grid-containerprj">

      <button className="container-project" onClick={() => openModalForProject("STJohns")}>
        <div className="nameprj">{t.projects.list.stjohns.name}</div>
        <div className="categorie">{t.projects.categories.grupal}</div>
        <div className="photoprj">
          <Image src={StJ1} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className="descriptionprj">
          <h4>{t.projects.list.stjohns.shortDesc}</h4>
        </div>
        <div className="lenguajesprj">
        <Image src={nextpng} width={200} height={200} alt="" />
        <Image src={csspng} width={200} height={200} alt="" />
        <Image src={jspng} width={200} height={200} alt="" />
        </div>
        <div className="github">
          <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("SMatiz")}>
        <div className="nameprj">{t.projects.list.smatiz.name}</div>
        <div className="categorie">{t.projects.categories.personal}</div>
        <div className="photoprj">
          <Image src={SMMain} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className="descriptionprj">
          <h4>{t.projects.list.smatiz.shortDesc}</h4>
        </div>
        <div className="lenguajesprj">
          <Image src={jspng} width={200} height={200} alt="" />
          <Image src={nextpng} width={200} height={200} alt="" />
          <Image src={csspng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
          <Image src={nodepng} width={200} height={200} alt="" />
        </div>
        <br />
        <div className="github">
          <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
        </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("EarthQA")}>
          <div className="nameprj">{t.projects.list.earthqa.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={EQAP} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.earthqa.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={jspng} width={200} height={200} alt="" />
          <Image src={nextpng} width={200} height={200} alt="" />
          <Image src={csspng} width={200} height={200} alt="" />
          <Image src={prismapng} width={200} height={200} alt="" />
          <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
      </button>

      <button className="container-project" onClick={() => openModalForProject("Pixels")}>
          <div className="nameprj">{t.projects.list.pixels.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={PX1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.pixels.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />          
          </div>
          <div className="categorie" style={{ color: 'white' }}>{t.projects.inDevelopment}</div>
          <br />
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NoteApp")}>
          <div className="nameprj">{t.projects.list.noteapp.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={NtePV} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.noteapp.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={swiftpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("CarRecognition")}>
            <div className="nameprj">{t.projects.list.carrecognition.name}</div>
            <div className="categorie">{t.projects.categories.personal}</div>
            <div className="photoprj">
              <Image src={CR} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj">
              <h4>{t.projects.list.carrecognition.shortDesc}</h4>
            </div>
            <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="github">
              <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
            </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("NumberRecog")}>
          <div className="nameprj">{t.projects.list.numberrecog.name}</div>
          <div className="categorie">{t.projects.categories.personal}</div>
          <div className="photoprj">
            <Image src={NR1} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.numberrecog.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
          <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("EnergyFlow")}>
          <div className="nameprj">{t.projects.list.energyflow.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={EF10} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.energyflow.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={reactpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("Spike")}>
          <div className="nameprj">{t.projects.list.spike.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={Spk12} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.spike.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={reactpng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("harmony_heaven")}>
          <div className="nameprj">{t.projects.list.harmony.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={HyH} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.harmony.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={nodepng} width={40} height={40} alt="" />
            <Image src={reactpng} width={40} height={40} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("PickEmE")}>
          <div className="nameprj">{t.projects.list.pickeme.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={PEE} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.pickeme.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={pythonpng} width={200} height={200} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

        <button className="container-project" onClick={() => openModalForProject("BugB")}>
          <div className="nameprj">{t.projects.list.buggblock.name}</div>
          <div className="categorie">{t.projects.categories.grupal}</div>
          <div className="photoprj">
            <Image src={BB} alt="" width={"auto"} height={"auto"} />
          </div>
          <div className="descriptionprj">
            <h4>{t.projects.list.buggblock.shortDesc}</h4>
          </div>
          <div className="lenguajesprj">
            <Image src={phppng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={mysqlpng} width={40} height={40} alt="" />
          </div>
          <div className="github">
            <i className="bi bi-eye-fill"></i>{t.projects.viewProject}
          </div>
        </button>

      </div>
      <br/><br/><br/><br/>

      {modalOpen && selectedProject === "STJohns" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.stjohns.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={jspng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4 dangerouslySetInnerHTML={{ __html: t.projects.list.stjohns.modal.desc1 }} />
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.stjohns.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={StJ3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p>{t.projects.list.stjohns.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={StJ4} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://st-johns-gym.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byQuesters/St-Johns-Gym"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "EarthQA" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.earthqa.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.earthqa.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.smatiz.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.smatiz.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "SMatiz" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.smatiz.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.smatiz.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={SM} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.smatiz.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMLg} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.smatiz.modal.desc3}</p>
            </div>
            <div className="photoprj1">
              <Image src={SMDb} alt="" width={"auto"} height={"auto"} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://gestor-baber.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/ControlOfBarberShop"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "Pixels" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.pixels.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={jspng} width={200} height={200} alt="" />
            <Image src={nextpng} width={200} height={200} alt="" />
            <Image src={csspng} width={200} height={200} alt="" />
            <Image src={prismapng} width={200} height={200} alt="" />
            <Image src={nodepng} width={200} height={200} alt="" />            </div>
            <div className="photoprj1">
              <Image src={PX1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.pixels.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={PX2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj1'>
              <p>{t.projects.list.pixels.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={PX3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.pixels.modal.desc3}</p>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://pixels-flax.vercel.app/"><i className="bi bi-eye" style={{ marginRight: '5px' }}></i>{t.projects.viewProduction}</a>
              </button>
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byquesters/Pixels.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
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

            <div className="nameprj1">{t.projects.list.carrecognition.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={CR1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.carrecognition.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.carrecognition.modal.desc2 }} />
            </div>
            <div className="photoprj1">
              <Image src={CR2} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Car-Recognition.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
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

            <div className="nameprj1">{t.projects.list.noteapp.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={swiftpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.noteapp.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p>{t.projects.list.noteapp.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={Nte} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              {t.projects.list.noteapp.modal.desc3}
            </div>
            <div className="photoprj1">
              <Image src={Nte1} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                {t.projects.list.noteapp.modal.desc4}
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/NotesAPP-SwiftUI.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
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

            <div className="nameprj1">{t.projects.list.numberrecog.modal.title}</div>
            <div className="categorie1">{t.projects.categories.personal}</div>
            <div className="lenguajesprj1">
            <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.numberrecog.modal.desc1}</h4>
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.numberrecog.modal.desc2}</p>
            </div>
            <br />
            <br />
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/Drawn-Digits-Recognition-1.0/tree/master/Reconocimiento%20de%20numero"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

      {modalOpen && selectedProject === "EnergyFlow" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.energyflow.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={reactpng} width={200} height={200} alt="" />
              <Image src={prismapng} width={200} height={200} alt="" />
              <Image src={jspng} width={200} height={200} alt="" />
              <Image src={nodepng} width={200} height={200} alt="" />
            </div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc1}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="descriptionprj1">
              <p>{t.projects.list.energyflow.modal.desc2}</p>
            </div>
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.energyflow.modal.desc3 }} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc4}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc5}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF2} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc6}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc7}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF5} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="photoprj1">
              <Image src={EF6} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc8}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF7} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="photoprj1">
              <Image src={EF8} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <div className="descriptionprj1">
              <h4>{t.projects.list.energyflow.modal.desc9}</h4>
            </div>
            <div className="photoprj1">
              <Image src={EF9} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br /><br />
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.energyflow.modal.desc10 }} />
            </div>
            <div>
              <button className='btngithublink'>
                <a href="https://github.com/byQuesters/FIE-EnergyFlow"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "Spike" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.spike.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="descriptionprj1">
              <h4>{t.projects.list.spike.modal.desc1}</h4>
            </div>
            <div className="lenguajesprj1">
              <Image src={reactpng} width={200} height={200} alt="" />
              <Image src={prismapng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={Spk3} alt="" width={"auto"} height={"auto"} />
            </div>
            <br /><br />
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.spike.modal.desc2 }} />
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.spike.modal.desc3 }} />
            </div>
            <br /><br />
            <div className="photoprj1">
              <Image src={Spk2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk5} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk6} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk7} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk8} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk9} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk10} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className="photoprj1">
              <Image src={Spk11} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/Pet-Care.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>
          </div>
        </div>
      )}

      {modalOpen && selectedProject === "harmony_heaven" && (
        <div className='modalprj1' onClick={closeModal}>
          <div className='modalcontent1' onClick={(e) => e.stopPropagation()}>

            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="nameprj1">{t.projects.list.harmony.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={nodepng} width={40} height={40} alt="" />
              <Image src={reactpng} width={40} height={40} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={HyH1} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.harmony.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.harmony.modal.desc2 }} />
            </div>
            <div className="photoprj1">
              <Image src={HyH} alt="" width={"auto"} height={"auto"} />
            </div>
            <button className='btngithublink'>
              <a href="https://github.com/byquesters/HarmonyAndHeavenm.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
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

            <div className="nameprj1">{t.projects.list.pickeme.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={pythonpng} width={200} height={200} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={PEE} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.pickeme.modal.desc1}</h4>
            </div>
            <div className='descriptionprj2'>
              <p>{t.projects.list.pickeme.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={PEE1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p dangerouslySetInnerHTML={{ __html: t.projects.list.pickeme.modal.desc3 }} />
            </div>
            <div className="photoprj1">
              <Image src={PEE2} alt="" width={"auto"} height={"auto"} />
            </div>
            <div className='descriptionprj4' id='1'>
              <p>
                {t.projects.list.pickeme.modal.desc4}
              </p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/PICK-EM-EVERITHING---PYGAME-PROJECT.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
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

            <div className="nameprj1">{t.projects.list.buggblock.modal.title}</div>
            <div className="categorie1">{t.projects.categories.grupal}</div>
            <div className="lenguajesprj1">
              <Image src={phppng} width={200} height={200} alt="" />
              <Image src={csspng} width={200} height={200} alt="" />
              <Image src={mysqlpng} width={40} height={40} alt="" />
            </div>
            <div className="photoprj1">
              <Image src={BB} alt="" width={"auto"} height={"auto"} />
            </div>

            <div className="descriptionprj1">
              <h4>{t.projects.list.buggblock.modal.desc1}</h4>
            </div>
            <div className='descriptionprj3'>
              <p>{t.projects.list.buggblock.modal.desc2}</p>
            </div>
            <div className="photoprj1">
              <Image src={BB1} alt="" width={"auto"} height={"auto"} />
            </div>
            <br />
            <br />
            <div className='descriptionprj3'>
              <p>{t.projects.list.buggblock.modal.desc3}</p>
            </div>
            <button className='btngithublink'> 
              <a href="https://github.com/byquesters/BuggBlock.git"><i className="bi bi-github" style={{ marginRight: '5px' }}></i>{t.projects.viewGitHub}</a>
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Proyectos;