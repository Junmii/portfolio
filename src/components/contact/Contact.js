import "./Contact.css"
import linkedIn from "../../resources/contact/🦆 icon _circle linkedin_.svg"
import github from "../../resources/contact/🦆 icon _github outline_.svg"
import insta from "../../resources/contact/🦆 icon _instagram_.svg"

export default function Contact() {
    return(
        <div className="contactContainer">
            <h2>You can reach me at</h2>
            <div className="linkContainer">
                <a href="https://www.instagram.com/tjaptjoyy/"><img className="icon" src={insta}  alt="Link to my Instagram"/></a>
                <a href="https://www.linkedin.com/in/joy-krabbe-0350b0200/"><img className="icon" src={linkedIn} alt="Link to my LinkedIn"/></a>
                <a href="https://github.com/Junmii"><img className="icon" src={github} alt="Link to my GitHub"/></a>
            </div>
            <h2 className="emailH2">Or send me an e-mail!</h2>
            <p>joy.krabbe@gmail.com</p>
        </div>
    );
}
