// navbar.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../css/navbar.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Navbar() {
    return (

        <div className="navbar">
            <div className="logo">
                <Link className="link" href="/"></Link>
            </div>

            <div className="access">
                <Link className="link" href="/"><i className="bi bi-house-fill"></i><span>Hogar</span></Link>
                <Link className="link" href="/"><i className="bi bi-person-raised-hand"></i><span>En solitario</span></Link>
                <Link className="link" href="/"><i className="bi bi-people-fill"></i><span>En grupo</span></Link>
                <Link className="link" href="/"><i className="">EN</i><span>Cambiar Idioma</span></Link>
            </div>
            
        </div>
    );
}
