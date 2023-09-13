import './App.css';
import NavigationBar from "../navbar/NavigationBar";
import Home from "../home/Home";
import {Route, Routes} from "react-router-dom";
import AboutMe from "../aboutMe/AboutMe";
import Projects from "../projects/Projects";

import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useRef} from "react";
import Contact from "../contact/Contact";

function App() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    const pageRef = useRef();
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
        switch (location.pathname) {
            case "/":
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image:  url('data:image/svg+xml,<svg viewBox=\"25 25 140 140\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M38.8,-69.9C45.1,-63.6,41.3,-42.6,48.2,-28.5C55.1,-14.5,72.6,-7.2,73.9,0.8C75.3,8.8,60.5,17.6,50.9,27C41.4,36.4,37,46.5,29.4,51.6C21.8,56.7,10.9,56.8,2.1,53.2C-6.7,49.6,-13.5,42.3,-22,37.7C-30.4,33.1,-40.7,31.3,-50.7,25.4C-60.8,19.6,-70.6,9.8,-74.7,-2.4C-78.9,-14.6,-77.5,-29.3,-69.6,-38.8C-61.7,-48.4,-47.5,-53,-34.8,-55.6C-22.2,-58.3,-11.1,-59,2.6,-63.5C16.3,-68,32.5,-76.3,38.8,-69.9Z\" transform=\"translate(100 100)\" /></svg>');"
                }, 360)
                break;
            }
            case "/AboutMe":
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image: url('data:image/svg+xml,<svg viewBox=\"40 45 120 120\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M21,-20.8C33.8,-19.6,55.3,-22.3,66.2,-15.2C77.2,-8.2,77.6,8.6,71.1,21.5C64.7,34.4,51.5,43.6,38.5,46.4C25.5,49.2,12.8,45.8,4.3,39.9C-4.2,33.9,-8.3,25.6,-24,23.6C-39.7,21.7,-66.8,26.1,-74.1,20.2C-81.4,14.3,-68.8,-2,-60,-16.4C-51.1,-30.9,-45.9,-43.5,-36.5,-45.8C-27.1,-48.2,-13.6,-40.4,-4.7,-33.8C4.1,-27.3,8.2,-22.1,21,-20.8Z\" transform=\"translate(100 100)\" /></svg>');"
                }, 360)
                break;
            }
            case "/Projects":
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image: null;"
                }, 360)
                break;
            }
            case "/Contact":
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image: url('data:image/svg+xml,<svg viewBox=\"0 0 135 135\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%234B5E76\" d=\"M39.5,-57.3C54.2,-52.1,71.1,-46.1,78.2,-34.6C85.3,-23,82.5,-5.8,73.7,6C64.9,17.8,50,24.1,40,33.6C30.1,43.1,25.1,55.7,16.5,59.8C8,64,-4.1,59.5,-19.8,58.8C-35.4,58.1,-54.7,61.1,-67.9,54.2C-81,47.3,-88.1,30.5,-86.9,14.7C-85.8,-1.1,-76.5,-15.9,-67.2,-28.4C-57.9,-40.9,-48.6,-51,-37.4,-57.9C-26.2,-64.7,-13.1,-68.3,-0.3,-67.8C12.4,-67.3,24.8,-62.6,39.5,-57.3Z\" transform=\"translate(75 70)\" /></svg>');"
                }, 360)
                break;
            }
            default:
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image:  url('data:image/svg+xml,<svg viewBox=\"25 25 140 140\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M38.8,-69.9C45.1,-63.6,41.3,-42.6,48.2,-28.5C55.1,-14.5,72.6,-7.2,73.9,0.8C75.3,8.8,60.5,17.6,50.9,27C41.4,36.4,37,46.5,29.4,51.6C21.8,56.7,10.9,56.8,2.1,53.2C-6.7,49.6,-13.5,42.3,-22,37.7C-30.4,33.1,-40.7,31.3,-50.7,25.4C-60.8,19.6,-70.6,9.8,-74.7,-2.4C-78.9,-14.6,-77.5,-29.3,-69.6,-38.8C-61.7,-48.4,-47.5,-53,-34.8,-55.6C-22.2,-58.3,-11.1,-59,2.6,-63.5C16.3,-68,32.5,-76.3,38.8,-69.9Z\" transform=\"translate(100 100)\" /></svg>');"
                }, 360)
                break;
            }
        }
    }, [location, displayLocation]);

    return (
      <div className="container">
          <header>
              <NavigationBar />
          </header>
          <main>
              <div className='page'>
                  <div
                      className={`${transitionStage}`}
                      onAnimationEnd={() => {
                          if (transitionStage === "fadeOut") {
                              setTransistionStage("fadeIn");
                              setDisplayLocation(location);
                          }
                      }}
                  >
                      <div className="pageContainer" ref={pageRef}>
                          <Routes location={displayLocation}>
                              <Route path="/" element={<Home />}></Route>
                              <Route path="/AboutMe" element={<AboutMe />}>About me</Route>
                              <Route path="/Projects" element={<Projects />}>Projects</Route>
                              <Route path="/Contact" element={<Contact />}>About me</Route>
                          </Routes>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
