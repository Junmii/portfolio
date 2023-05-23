import "./AboutMe.css"
import figma from "../../resources/icons/figma.png"
import html from "../../resources/icons/html.png"
import css from "../../resources/icons/css.png"
import angular from "../../resources/icons/angular.png"
import js from "../../resources/icons/js.png"
import java from "../../resources/icons/java.png"
import react from "../../resources/icons/react.png"
import csharp from "../../resources/icons/csharp.png"

export default function AboutMe() {
    return (
        <div className="infoContainer">
            <div className="intro">
                <p>
                    I’m a third year student at the University of Applied Sciences Utrecht who loves to design apps and websites!
                </p>
                <p>
                    My specialization is in Back-End, but I prefer doing Front-End work. I like being creative.
                </p>
                <p>
                    In my free time I prefer doing things like reading books, playing games or designing things.
                </p>
            </div>
            <div className="languagesAndFrameworks">
                <h2 className="current">Currently learning</h2>
                <div className="learning">
                    <img src={figma} alt="figma logo" className="figma"/>
                    <img src={react} alt="react logo" className="react"/>
                </div>
                <h2>Languages and frameworks</h2>
                <div className="known">
                    <img src={html} alt="html logo" className="html"/>
                    <img src={css} alt="css logo" className="css"/>
                    <img src={js} alt="js logo" className="js"/>
                    <img src={java} alt="java logo" className="java"/>
                    <img src={csharp} alt="csharp logo" className="csharp"/>
                    <img src={angular} alt="angular logo" className="angular"/>
                </div>
            </div>
        </div>
    )
}