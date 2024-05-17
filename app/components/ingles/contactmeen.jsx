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
                        {copiadoCorreo ? 'Copied' : 'Copy'}
                    </button>
            </div>
            <h1>PHONE NUMBER</h1>
            <div className="telefono">
            <span id="tel" className='correotxt'>+52 3141576598</span>
            <button className='correobtn' onClick={() => copiarTelefono('+523141576598')}>
                {copiadoTelefono ? 'Copied' : 'Copy'}
            </button>
            </div>
        </div>
        )
    }

export default ContactameEN;
