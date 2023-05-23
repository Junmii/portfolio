import './App.css';
import NavigationBar from "../navbar/NavigationBar";
import Home from "../home/Home";
import {Route, Routes} from "react-router-dom";
import AboutMe from "../aboutMe/AboutMe";

import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useRef} from "react";

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
                    pageRef.current.style = "background-image:  url('data:image/svg+xml,<svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M38.8,-69.9C45.1,-63.6,41.3,-42.6,48.2,-28.5C55.1,-14.5,72.6,-7.2,73.9,0.8C75.3,8.8,60.5,17.6,50.9,27C41.4,36.4,37,46.5,29.4,51.6C21.8,56.7,10.9,56.8,2.1,53.2C-6.7,49.6,-13.5,42.3,-22,37.7C-30.4,33.1,-40.7,31.3,-50.7,25.4C-60.8,19.6,-70.6,9.8,-74.7,-2.4C-78.9,-14.6,-77.5,-29.3,-69.6,-38.8C-61.7,-48.4,-47.5,-53,-34.8,-55.6C-22.2,-58.3,-11.1,-59,2.6,-63.5C16.3,-68,32.5,-76.3,38.8,-69.9Z\" transform=\"translate(100 100)\" /></svg>');"
                }, 350)
                break;
            }

            case "/AboutMe":
            {
                setTimeout(() => {
                    pageRef.current.style = "background-image: url('data:image/svg+xml,<svg viewBox=\"0 0 150 150\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M16.1,-25C23.1,-23.9,32.4,-24,44.8,-20C57.3,-16.1,72.8,-8,74.7,1.1C76.5,10.2,64.6,20.3,52.2,24.2C39.7,28.1,26.5,25.6,17.7,30.1C8.9,34.6,4.5,45.9,-3.4,51.8C-11.3,57.7,-22.6,58.2,-31.4,53.7C-40.2,49.3,-46.6,39.9,-48.2,30.1C-49.9,20.4,-46.9,10.2,-47.2,-0.1C-47.4,-10.5,-50.9,-21,-49.4,-30.9C-47.8,-40.8,-41.1,-50.2,-32,-50.1C-23,-50,-11.5,-40.4,-3.4,-34.4C4.6,-28.4,9.2,-26.1,16.1,-25Z\" transform=\"translate(100 100)\" /></svg>');"
                }, 350)
                break;
            }
            default:
                pageRef.current.style = "background-image:  url('data:image/svg+xml,<svg viewBox=\"0 0 150 150\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"%234B5E76\" d=\"M38.8,-69.9C45.1,-63.6,41.3,-42.6,48.2,-28.5C55.1,-14.5,72.6,-7.2,73.9,0.8C75.3,8.8,60.5,17.6,50.9,27C41.4,36.4,37,46.5,29.4,51.6C21.8,56.7,10.9,56.8,2.1,53.2C-6.7,49.6,-13.5,42.3,-22,37.7C-30.4,33.1,-40.7,31.3,-50.7,25.4C-60.8,19.6,-70.6,9.8,-74.7,-2.4C-78.9,-14.6,-77.5,-29.3,-69.6,-38.8C-61.7,-48.4,-47.5,-53,-34.8,-55.6C-22.2,-58.3,-11.1,-59,2.6,-63.5C16.3,-68,32.5,-76.3,38.8,-69.9Z\" transform=\"translate(100 100)\" /></svg>');"
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
                              <Route path="/SchoolProjects" element={<AboutMe />}>About me</Route>
                              <Route path="/PersonalProjects" element={<AboutMe />}>About me</Route>
                              <Route path="/Contact" element={<AboutMe />}>About me</Route>
                          </Routes>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
