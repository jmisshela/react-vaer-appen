import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Velkommen til reactværappen!</h1>
        <Weather />
        <br />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/jmisshela"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Jane Misshela
          </a>
          , it is open-sourced on{" "}
          <a
            href="https://github.com/jmisshela/react-vaer-appen"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://rad-salamander-c82269.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
