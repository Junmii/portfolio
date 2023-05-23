import './NavigationBar.css';
import logo from '../../resources/JK.png'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

export default function NavigationBar() {
    return (
        <Navbar>
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <div className="buttonContainer">
                <Link to="/AboutMe" className="linkButton">About me</Link>
                <Link to="/SchoolProjects" className="linkButton">School projects</Link>
                <Link to="/PersonalProjects" className="linkButton">Personal projects</Link>
                <Link to="/Contact" className="linkButton">Contact</Link>
            </div>
        </Navbar>
    )
}