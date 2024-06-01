// navbar.jsx

'use client';

/* IMPORT CSS */
import "../../css/navbar.css"

/* BOOTSTRAP ICONS */
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavbarEN() {
    return (

        <div className="navbar">
            <div className="logo">
                <Link className="link" href="/">Al</Link>
            </div>

            <div className="access">
                <a className="link" href="#"><i className="bi bi-house-fill"></i><span>Home</span></a>
                <a className="link" href="./PersonalEN"><i className="bi bi-person-raised-hand"></i><span>Solo</span></a>
                <a className="link" href="/"><i className="bi bi-people-fill"></i><span>In Group</span></a>
             </div>
            
        </div>
    );
}
