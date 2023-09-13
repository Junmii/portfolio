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
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <div className="buttonContainer">
                <Link to="/AboutMe" className="linkButton">About me</Link>
                <Link to="/Projects" className="linkButton">Projects</Link>
                <Link to="/Contact" className="linkButton">Contact</Link>
            </div>
            <div className="dropdownContainer">
                <button className="dropdownButton" onClick={toggleMenu}>
                    Navigation
                </button>
                {isOpen && (
                    <div className="dropdownContent">
                        <Link to="/AboutMe" className="dropdownLink">
                            About me
                        </Link>
                        <Link to="/Projects" className="dropdownLink">
                            Projects
                        </Link>
                        <Link to="/Contact" className="dropdownLink">
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </Navbar>
    )
}
