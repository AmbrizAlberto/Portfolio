'use client'


import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const ContactameEN = () => {

    const [copiadoCorreo, setCopiadoCorreo] = useState(false);
    const [copiadoTelefono, setCopiadoTelefono] = useState(false);

    function copiarAlPortapapeles(texto) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto);
            setCopiadoCorreo(true);
            setTimeout(() => setCopiadoCorreo(false), 3000); // Espera 3 segundos
        }
        }

        function copiarTelefono(texto) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(texto);
            setCopiadoTelefono(true);
            setTimeout(() => setCopiadoTelefono(false), 3000); // Espera 3 segundos
        }
        }

    return (
        <div className="contactme">
            <h1 className="contactmett">CONTACT ME</h1>
            <h1>EMAIL</h1>
            <div className="correo">
            <span id="url" className='correotxt'>albertpoambez@icloud.com</span>
            <button className='correobtn' onClick={() => copiarAlPortapapeles('albertpoambez@icloud.com')}>
                {copiadoCorreo ? 'Copiado' : 'Copiar'}
            </button>
            <a href="mailto:albertpoambez@icloud.com?subject=Correo%20Importante%20de%20Contacto%20Github%20&body=Hola%20Alberto,%0D%0A%0D%0AQuisiera%20ponerme%20en%20contacto%20contigo.%0D%0A%0D%0ASaludos,%0D%0ATu%20Nombre">
                <img src="https://img.shields.io/badge/mail:  albertpoambez-%23EA4335.svg?style=for-the-badge&logo=icloud&logoColor=white" t=mail style="margin-bottom: 5px;" />
            </a>
            </div>
            <h1>PHONE NUMBER</h1>
            <div className="telefono">
            <span id="tel" className='correotxt'>+52 3141576598</span>
            <button className='correobtn' onClick={() => copiarTelefono('+523141576598')}>
                {copiadoTelefono ? 'Copiado' : 'Copiar'}
            </button>
            </div>
        </div>
        )
    }

export default ContactameEN;
