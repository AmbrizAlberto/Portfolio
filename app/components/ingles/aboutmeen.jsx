'use client'
import { useState } from 'react';
import Image from 'next/image';
import miImagen from '../../images/1mb.jpeg';
import miImagen2 from '../../images/1mb2.jpeg';


const AboutmeEN = () => {

    const downloadCVEN = "./CVEN.pdf";
    const [hovered, setHovered] = useState(false);

    return (
        <div className="personaldata">
            <div className="datos1">
                <div className="photomia">
                    <a href={downloadCVEN} download="CV ENG - Alberto Ambriz.pdf">
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
                    <h2>ABOUT ME...</h2>
                    <div className='descriptionme'>
                        Hello! I am a FullStack developer Software Engineer with more than 4 years of experience in the field of programming. I look forward to the opportunity to be part of your development team!                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutmeEN;


