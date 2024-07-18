'use client'
import { useState } from 'react';
import Image from 'next/image';
import miImagen from '../../images/1mb.jpeg';
import miImagen2 from '../../images/1mb2.jpeg';

const Aboutme = () => {

    const downloadCV = "./CVES.pdf";
    const [hovered, setHovered] = useState(false);

    return (
        <div className="personaldata">
            <div className="datos1">
                <div className="photomia">
                    <a href={downloadCV} download="CV ENG - Alberto Ambriz.pdf">
                        <Image onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} src={hovered ? miImagen : miImagen2} width={"auto"} height={"auto"} priority={true} alt="" />
                    </a>
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
                        ¡Hola! Soy un desarrollador FullStack Ingeniero de Software con más de 4 años de experiencia en el ámbito de la programación. ¡Espero con entusiasmo la oportunidad de formar parte de su equipo de desarrollo!.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;


