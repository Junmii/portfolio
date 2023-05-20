import './App.css';
import NavigationBar from "../navbar/NavigationBar";
import Home from "../home/Home";

function App() {
  return (
      <div id="container">
          <header>
              <NavigationBar />
          </header>
          <main>
              <div className='page'>
                  <Home />
              </div>
          </main>
      </div>
  );
}

export default App;
