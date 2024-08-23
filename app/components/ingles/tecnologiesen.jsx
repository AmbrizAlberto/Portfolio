import Image from 'next/image';

const TecnologiasEN = () => {
  return (
    <div className="lenguajes">
        <h2>TECNOLOGIES</h2>

        <div className="grid-containertec">
          <div className="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div className="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width={200} height={200} alt="" />
                <p>HTML</p>
              </div>
              <div className="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={200} height={200} alt="" />
                <p>CSS</p>
              </div>
              <div className="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width={200} height={200} alt="" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="grid-itemtec">
            <h2>Backend</h2>
            <div className="tecnologias">
              <div className="image-with-text">
                <Image src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_prisma_icon_130234.png" width={200} height={200} alt="" />
                <p>Prisma</p>
              </div>
              <div className="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" width={300} height={300} alt="" />
                <p>PHP</p>
              </div>
              <div className="image-with-text">
                <Image src="https://camo.githubusercontent.com/57849c6a718458e32ed51527a073b72d8f1737ee515ab6f80d5a9107a485f40c/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f37353934312f313635373730373837382d6e6578746a735f6c6f676f2e706e67" width={200} height={200} alt="" />
                <p>NextJS</p>
              </div>
              <div className="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={200} height={200} alt="" />
                <p>MySQL</p>
              </div>
              <div className="image-with-text">
                <Image src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945054.png?f=webp&w=256" width={200} height={200} alt="" />
                <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Extra</h2>
            <div className="tecnologias">
              <div className="image-with-text">
                <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={200} height={200} alt="" />
                <p>Swift</p>
              </div>
              <div className="image-with-text">
                <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={200} height={200} alt="" />
                <p>Python</p>
              </div>
            </div>

          </div>
          <div className="grid-itemtec">
            <h2>Tools</h2>
            <div className="tecnologias">
              <div className="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/31/ITerm2_v3.4_icon.png" width={200} height={200} alt="" />
                <p>Terminal</p>
              </div>
              <div className="image-with-text">
                <Image src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" width={200} height={200} alt="" />
                <p>VS Code</p>
              </div>
              <div className="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" width={200} height={200} alt="" />
                <p>Git</p>
              </div>
              <div className="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={200} height={200} alt="" />
                <p>GitHub</p>
              </div>
              <div className="image-with-text">
                <Image src="https://img.icons8.com/color/200/npm.png" width={200} height={200} alt="" />
                <p>npm</p>
              </div>
            </div>
          </div>

        </div>
      
      </div>
  )
}

export default TecnologiasEN;
