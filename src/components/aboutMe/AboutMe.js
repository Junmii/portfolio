import "./AboutMe.css"
import figma from "../../resources/icons/figma.png"
import html from "../../resources/icons/html.png"
import css from "../../resources/icons/css.png"
import vue from "../../resources/icons/vue.png"
import js from "../../resources/icons/js.png"
import java from "../../resources/icons/java.png"
import react from "../../resources/icons/react.png"
import csharp from "../../resources/icons/csharp.png"
import typescript from "../../resources/icons/typescript.png"

export default function AboutMe() {
    return (
        <div className="infoContainer">
            <div className="intro">
                <p>
                    My name is Joy! I am a Frontend Developer with a passion for UI/UX design. Besides developing I also
                    love to design webpages and apps.
                </p>
                <p>
                    My passion for computers and technology is something I have had since I was little. Aside from my interest in technology, I love being creative. Reading, writing and drawing or painting are activities I thoroughly enjoy!
                </p>
            </div>
            <div className="languagesAndFrameworks">
                <h2>Tech stack</h2>
                <div className="known">
                    <img src={vue} alt="vue logo" className="tech-icon"/>
                    <img src={figma} alt="figma logo" className="tech-icon"/>
                    <img src={react} alt="react logo" className="tech-icon"/>
                    <img src={html} alt="html logo" className="tech-icon"/>
                    <img src={css} alt="css logo" className="tech-icon"/>
                    <img src={js} alt="js logo" className="tech-icon"/>
                    <img src={java} alt="java logo" className="tech-icon"/>
                    <img src={csharp} alt="csharp logo" className="tech-icon"/>
                    <img src={typescript} alt="typescript logo" className="tech-icon"/>
                </div>
            </div>
        </div>
    )
}