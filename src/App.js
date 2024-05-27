import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App in React</h1>
        <p>Real time weather from cities around the 🌎</p>
        <Weather />
        <div className="footer">
          <p>
            This project was coded by{" "}
            <a href="https://github.com/camilapferreira" target="_blank">
              Camila P. Ferreira{" "}
            </a>
            and it is{" "}
            <a
              href="https://github.com/camilapferreira/frontend-portfolio"
              target="_blank"
            >
              on GitHub{" "}
            </a>
            and
            <a
              href="https://camila-frontend-portfolio.netlify.app/"
              target="_blank"
            >
              {" "}
              hosted on Netlify{" "}
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
