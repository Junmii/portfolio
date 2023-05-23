import "./Home.css";
import me from "../../resources/me.png"
import {useLocation} from "react-router-dom";

export default function Home() {
    return (
        <div className="infoContainer">
            <div className="textContainer">
                <h1>Hi, my name is Joy!</h1>
                <p>I’m a student Software Development

                    at the University of Applied

                    Sciences Utrecht</p>
            </div>
            <div className="imgContainer">
                <img src={me} alt="me" className="picOfMe"/>
            </div>
        </div>
    )
}