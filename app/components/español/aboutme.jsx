import Image from 'next/image';
import miImagen from '../../images/1mb.jpeg';

const Aboutme = () => {

    const downloadCV = "./CVES.pdf";

    return (
        <div className="personaldata">
            <div className="datos1">
                <div className="photomia">
                    <a href={downloadCV} download="CV ESP - Alberto Ambriz.pdf">
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
                    <h2>SOBRE MI...</h2>
                    <div className='descriptionme'>
                        Estudiante de Ingeniería en Software, me apasiona el desarrollo de aplicaciones (web/móvil), el diseño de estas es lo más entretenido para mí, estoy listo para trabajar de inmediato.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;


