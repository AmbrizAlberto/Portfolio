import Image from 'next/image';
import miImagen from '../../images/1mb.jpeg';

const AboutmeEN = () => {

    const downloadCVEN = "./CVEN.pdf";

    return (
        <div className="personaldata">
            <div className="datos1">
                <div className="photomia">
                    <a href={downloadCVEN} download="CV ENG - Alberto Ambriz.pdf">
                        <Image src={miImagen} width={"auto"} height={"auto"} priority={true}  alt="" />
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
                        Software Engineering student, I am passionate about developing applications (web/mobile), their design is the most entertaining for me, I am ready to work immediately.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutmeEN;


