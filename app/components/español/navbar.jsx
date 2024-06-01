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
                <a className="link" href="./Portfolio">Al</a>
            </div>

            <div className="access">
                <a className="link" href="/"><i className="bi bi-house-fill"></i><span>Inicio</span></a>
                <a className="link" href="./Personal"><i className="bi bi-person-raised-hand"></i><span>Solo</span></a>
                <a className="link" href="/"><i className="bi bi-people-fill"></i><span>Grupal</span></a>
            </div>
            
        </div>
    );
}
