import "./SchoolProjects.css"
import hu from "../../resources/hu.png"
import xp from "../../resources/xp.png"
import jcr from "../../resources/jcr.png"

export default function SchoolProjects() {
    return(
        <div className="projectsContainer">
            <div className="pContainer">
                <p>With some school projects I was in charge of creating the Front-End. The projects referenced on this page were my favourites.</p>
            </div>
            <div className="first">
                <p>Conversietool HU</p>
                <img src={hu} alt="HU logo" />
            </div>
            <div className="second">
                <p>Tetris</p>
                <img src={xp} alt="TetrisXP logo" />
            </div>
            <div className="third">
                <p>CTFD Challenge Manager</p>
                <img src={jcr} alt="JCR logo" />
            </div>
        </div>
    );
}
