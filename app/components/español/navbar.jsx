// navbar.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../../css/navbar.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
    return (

        <div className="navbar">
            <div className="logo">
                <Link className="link" href="/"></Link>
            </div>

            <div className="access">
                <Link className="link" href="/app"><i className="bi bi-house-fill"></i><span>Inicio</span></Link>
                <Link className="link" href="/"><i className="bi bi-translate"></i><span>EN / ES</span></Link>
                <a className="link" href="/Personal"><i className="bi bi-person-raised-hand"></i><span>Solitario</span></a>
                <Link className="link" href="/"><i className="bi bi-people-fill"></i><span>Grupal</span></Link>
         
            </div>
            
        </div>
    );
}
