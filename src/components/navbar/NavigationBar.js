import './NavigationBar.css';
import logo from '../../resources/JK.png'
import Navbar from 'react-bootstrap/Navbar';
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar>
            <Link to="/" onClick={toggleMenu}><img src={logo} alt="Logo" /></Link>
            <div className="buttonContainer">
                <Link to="/AboutMe" className="linkButton">About me</Link>
                <Link to="/Projects" className="linkButton">Projects</Link>
                <Link to="/Contact" className="linkButton">Contact</Link>
            </div>
            <div className="dropdownContainer">
                <button className="dropdownButton" onClick={toggleMenu}>
                    Navigation
                </button>
                <div className={isOpen ? "dropdownContent open" : "dropdownContent"}>
                    <Link to="/AboutMe" className="dropdownLink" onClick={toggleMenu}>
                        About me
                    </Link>
                    <Link to="/Projects" className="dropdownLink" onClick={toggleMenu}>
                        Projects
                    </Link>
                    <Link to="/Contact" className="dropdownLink" onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            </div>
        </Navbar>
    )
}
