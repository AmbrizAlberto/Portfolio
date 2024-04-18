
import Image from 'next/image';

const Proyectos = () => {
  return (
        <div className='projects'>
          <h2>PROYECTOS</h2>
          <div className="grid-containerprj">
            <button className="container-project">
              <div className="nameprj">Harmony & Heaven</div>
              <div className="categorie">Grupal</div>
              <div className="photoprj">
                <Image src="" alt="" width={40} height={40} />
              </div>
              <div className="descriptionprj">
                <h4>Tienda de instrumentos con CRUD, Inicio de sesión y Punto de venta.</h4>
              </div>
              <div className="lenguajesprj">
                <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
                <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
              </div>
              <div className="github">
                <i className="bi bi-github"></i>Ver Repositorio
              </div>
            </button>
          </div>
      </div>
    );
  }

export default Proyectos;
