import './NavigationBar.css';
import logo from '../../resources/JK.png'

export default function NavigationBar() {
    return (
        <nav>
            <img src={logo} alt="Logo"/>
            <div>
                <button>About me</button>
                <button>School projects</button>
                <button>Personal projects</button>
                <button>Contact</button>
            </div>
        </nav>
    )
}