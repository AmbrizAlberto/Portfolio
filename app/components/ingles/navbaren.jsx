// navbar.jsx

'use client';

/* IMPORT PRINCIPAL LIBRARYS */
import Link from 'next/link';

/* IMPORT CSS */
import "../../css/navbar.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function NavbarEN() {
    return (

        <div className="navbar">
            <div className="logo">
                <Link className="link" href="/"></Link>
            </div>

            <div className="access">
                <Link className="link" href="#"><i className="bi bi-house-fill"></i><span>Home</span></Link>
                <Link className="link" href="/"><i className="bi bi-translate"></i><span>ES / EN</span></Link>
                <Link className="link" href="/"><i className="bi bi-person-raised-hand"></i><span>Solo</span></Link>
                <Link className="link" href="/"><i className="bi bi-people-fill"></i><span>In Group</span></Link>
            </div>
            
        </div>
    );
}
