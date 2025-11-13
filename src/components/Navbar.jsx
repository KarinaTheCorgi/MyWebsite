import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        document.body.classList.toggle("show-mobile-menu");
    }
    
    return (
        <header>
            <nav className='navbar section-content'>
                <Link to="/" className='nav-logo' onClick={() => setMenuOpen(false)}>
                    <h1 className='logo-text'>krnthec.org</h1>
                    <link rel ="icon" type="image/x-icon" href="/public/corgi_logo.ico" />
                </Link>

                <ul className='nav-menu'>
                    <button id='menu-close-button' className='fas fa-times' onClick={toggleMenu}/>

                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/games' className='nav-link' onClick={() => setMenuOpen(false)}>Games</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/projects' className='nav-link' onClick={() => setMenuOpen(false)}>Projects</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about' className='nav-link' onClick={() => setMenuOpen(false)}>About</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/socials' className='nav-link' onClick={() => setMenuOpen(false)}>Socials</Link>
                    </li>
                </ul>
                <button id='menu-open-button' className='fas fa-bars' onClick={toggleMenu}/>
            </nav>
        </header>
    )
}