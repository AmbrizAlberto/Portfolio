import Image from 'next/image';

const Technologies = () => {
  return (
    <div className="lenguajes">
        <h2>TECNOLOGIAS</h2>

        <div class="grid-containertec">
          <div class="grid-itemtec">
            <h2>Frontend</h2>
             <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" width={40} height={40} alt="" />
                <p>HTML</p>
              </div>
              <div class="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" width={40} height={40} alt="" />
                <p>CSS</p>
              </div>
              <div class="image-with-text">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width={40} height={40} alt="" />
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div class="grid-itemtec">
            <h2>Backend</h2>
            <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://camo.githubusercontent.com/57849c6a718458e32ed51527a073b72d8f1737ee515ab6f80d5a9107a485f40c/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f37353934312f313635373730373837382d6e6578746a735f6c6f676f2e706e67" width={40} height={40} alt="" />
                <p>NextJS</p>
              </div>
              <div class="image-with-text">
                <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width={40} height={40} alt="" />
                <p>MySQL</p>
              </div>
              <div class="image-with-text">
                <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={40} height={40} alt="" />
                <p>NodeJS</p>
              </div>
            </div>

          </div>
          <div class="grid-itemtec">
            <h2>Aprendiendo</h2>
            <div className="tecnologias">
              <div class="image-with-text">
                <Image src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width={40} height={40} alt="" />
                <p>Swift</p>
              </div>
              <div class="image-with-text">
                <Image src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp" width={40} height={40} alt="" />
                <p>Python</p>
              </div>
            </div>

          </div>
          <div class="grid-itemtec">
            <h2>Herramientas</h2>

          </div>

        </div>
      
      </div>
  )
}

export default Technologies;
