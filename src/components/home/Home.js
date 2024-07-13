import "./Home.css";
import me from "../../resources/me.png"

export default function Home() {
    return (
        <div className="infoContainer">
            <div className="textContainer">
                <h1>Hi, my name is Joy!</h1>
                <p>I'm a Junior Front-End Developer and recently obtained my Bachelor of Science degree at the University of Applied Sciences Utrecht</p>
            </div>
            <div className="imgContainer">
                <img src={me} alt="me" className="picOfMe"/>
            </div>
        </div>
    )
}
