import React, {useState} from "react";
import "./Projects.css";
import { Button } from "react-bootstrap";
import gainsTrackerHome from "../../resources/gainsTrackerHome.png";
import wbd from "../../resources/wbd.jpg";
import bob from "../../resources/bob.png";
import portfolio from "../../resources/portfolio.png";
import portfolioH from "../../resources/portfolio-h.png";

const projectsData = [
    {
        name: "Portfolio Henk Hardeman",
        description: "The project I'm currently working on is a portfolio website for the writer Henk Hardeman. Together with my partner, we communicate with our client and build him a website based on his preferences.",
        image: portfolioH,
    },
    {
        name: "Gains Tracker",
        description:
            "The Gains Tracker is an app which I am currently developing together with my partner. \nSince our friends and us go to the gym quite often, he came up with the idea to build an app in which we can log our own process and check out that of our friends. \nHe designs and develops the Back-End and I have designed and am building the Front-End!",
        image: gainsTrackerHome,
    },
    {
        name: "WBD",
        description:
            "Werkenbijdrogisterij (WBD) is a website my partner and I have build for my mother. She is a manager at an Etos store and needed a way to set a lower bar for hiring people. \nShe came up with the idea for a website where the person looking for a job can leave their contact info without having to directly contact Etos themselves. \nOnce again, my partner build the Back-End for this site and I designed and developed the Front-End.",
        image: wbd,
    },
    {
        name: "Bob Bot",
        description:
            "This is a small side project of mine that doesn't really have to do much with Front-End, but I'd still like to include it since it was my first personal Software Development project. \nBob Bot is just a Discord Bot who can execute certain commands, but with the face of my bunny, Bob! 🐰",
        image: bob,
    },
    {
        name: "New portfolio!",
        description: "Right now I am working on a new version of my portfolio. This one is going to have a more nostalgic look, as if you just landed on a MySpace profile!",
        image: portfolio,
    },
];

export default function Projects() {
    const [activeProject, setActiveProject] = useState("Gains Tracker"); // Set "Gains Tracker" as active by default
    let [dontshowprev, setDontShowPrev] = useState(true);
    let [dontshownext, setDontShowNext] = useState(false);

    const handleClick = (projectName) => {
        setActiveProject(projectName);
    };

    const handleNext = () => {
        let nextIndex = projectsData.indexOf(projectsData.find((project) => project.name === activeProject))+1;
        const nextProject = projectsData[nextIndex].name;
        setActiveProject(nextProject);

        setDontShowNext(projectsData.indexOf(projectsData.find((project) => project.name === nextProject)) === projectsData.length-1);
        setDontShowPrev(projectsData.indexOf(projectsData.find((project) => project.name === nextProject)) === 0);
    };

    const handlePrevious = () => {
        let prevIndex = projectsData.indexOf(projectsData.find((project) => project.name === activeProject))-1;
        const prevProject = projectsData[prevIndex].name;

        setActiveProject(prevProject);
        setDontShowNext(projectsData.indexOf(projectsData.find((project) => project.name === prevProject)) === projectsData.length-1);
        setDontShowPrev(projectsData.indexOf(projectsData.find((project) => project.name === prevProject)) === 0);
    };

    return (
        <div className="projectsContainer">
            <div className="relativeList">
                <div className="projectsList">
                    {projectsData.map((project) => (
                        <Button
                            key={project.name}
                            className="projectButton"
                            onClick={() => handleClick(project.name)}
                        >
                            {project.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="projectContainer">
                {projectsData.map((project) => (
                    <Project
                        key={project.name}
                        project={project}
                        isActive={activeProject === project.name} 
                    />
                ))}
            </div>
            <button id="next" className={dontshownext ? "noshow" : "show"} onClick={handleNext}> &#x3e; </button>
            <button id="prev" className={dontshowprev ? "noshow" : "show"} onClick={handlePrevious}> &#x3c; </button>
        </div>
    );
}

function Project({ project, isActive }) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(prev => !prev);
    };

    return (
        <div className={isActive ? "project active" : "project"}>
            <div className="headerTextContainer">
                <h1 className={`${project.name.replace(/\s+/g, "")}Header`}>
                    {project.name}
                </h1>
                <p className="projectDescription">{project.description}</p>
                <button className="infoButton" onClick={toggleInfo}>
                    {showInfo ? "Show Image" : "Information"}
                </button>
            </div>
            {showInfo ? (
                <p className="projectDescription">{project.description}</p>
            ) : (
                <img
                    src={project.image}
                    className={`${project.name.replace(/\s+/g, "")}Img`}
                    alt={`Screenshot of ${project.name}`}
                />
            )}
        </div>
    );
}
