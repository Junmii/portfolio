import "./Projects.css"
import {Button} from "react-bootstrap";
import gainsTrackerHome from "../../resources/gainsTrackerHome.png"
import wbd from "../../resources/wbd.jpg"
import bob from "../../resources/bob.png"
import {useState} from "react";

export default function Projects() {
    let projectStates = {
        gainsActive: true,
        drogisterijActive: false,
        bobActive: false
    }
    let [states, setState] = useState(projectStates);

    function yup(projectName) {
        switch (projectName) {
            case "Gains":
                states = {
                    gainsActive: true,
                    drogisterijActive: false,
                    bobActive: false
                }
                break;
            case "Drogisterij":
                states = {
                    gainsActive: false,
                    drogisterijActive: true,
                    bobActive: false
                }
                break;
            case "Bob":
                states = {
                    gainsActive: false,
                    drogisterijActive: false,
                    bobActive: true
                }
                break;
            case "CTFD":
                states = {
                    gainsActive: false,
                    drogisterijActive: false,
                    bobActive: false
                }
                break;
            default:
                states = {
                    gainsActive: true,
                    drogisterijActive: false,
                    bobActive: false
                }
        }

        setState(states)
    }

    return(
        <div className="projectsContainer">
            <div className="relativeList">
                <div className="projectsList">
                    <Button id="GainsTrackerButton" className="projectButton" onClick={() => yup("Gains")}>Gains Tracker</Button>
                    <Button id="WerkenBijDrogisterijButton" className="projectButton" onClick={() => yup("Drogisterij")}>Werkenbijdrogisterij</Button>
                    <Button id="BobBotButton" className="projectButton" onClick={() => yup("Bob")}>Bob Bot</Button>
                </div>
            </div>
                <div className="projectContainer">
                    {states.gainsActive &&
                        (<div id="GainsTracker" className={states.gainsActive?'fadeIn':'fadeOut'}>
                            <div className="headerTextContainer">
                                <h1 className="gainsTrackerHeader">Gains Tracker</h1>
                                <p>
                                    The Gains Tracker is an app which I am currently developing together with my partner.
                                </p>
                                <p>
                                    Since we and our friends go to the gym quite often, he came up with the idea to build an
                                    app in which we can log our process and check out our friends process’
                                </p>
                                <p>
                                    He designs and develops the Back-End and I have designed and will be building the
                                    Front-End!
                                </p>
                            </div>
                            <img src={gainsTrackerHome} className="gainsTrackerImg" alt="Screenshot of Gains Tracker"/>
                        </div>)
                    }
                    {states.drogisterijActive &&
                        (<div id="WerkenBijDrogisterij" className={states.drogisterijActive?'fadeIn':'fadeOut'}>
                            <div className="headerTextContainer">
                                <h1 className="wbdHeader">Werkenbijdrogisterij</h1>
                                <p>
                                    Werkenbijdrogisterij is a website my partner and I have build for my mother. She is a manager at an Etos store and needed a way to set a lower bar for hiring people.
                                </p>
                                <p>
                                    She came up with the idea for a website where the person looking for a job can leave their contact info without having to directly contact Etos themselves.
                                </p>
                                <p>
                                    Once again, my partner build the Back-End for this site and I designed and developed the Front-End.
                                </p>
                            </div>
                            <img src={wbd} className="wbdImg" alt="Screenshot of WBD"/>
                        </div>)
                    }
                    {states.bobActive &&
                        (<div id="BobBot" className={states.bobActive?'fadeIn':'fadeOut'}>
                            <div className="headerTextContainer">
                                <h1 className="bobHeader">Bob Bot</h1>
                                <p>
                                    This is a small side project of mine that doesn't really have to do much with Front-End, but I'd still like to include it since it was my first personal Software Development project.
                                </p>
                                <p>
                                    Bob Bot is just a Discord Bot who can do silly little commands, but with the face of my bunny, Bob! 🐰
                                </p>
                            </div>
                            <img src={bob} className="bobImg" alt="Screenshot of Bob Bot"/>
                        </div>)
                    }
                </div>
        </div>
    );
}
