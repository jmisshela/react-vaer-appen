import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <br />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/jmisshela"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <strong>Jane Misshela</strong>
          </a>
          , it is open-sourced on{" "}
          <a
            href="https://github.com/jmisshela/react-vaer-appen"
            target="_blank"
            rel="noreferrer"
          >
            <strong>GitHub</strong>
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://rad-salamander-c82269.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Netlify</strong>
          </a>
          <br />
          Image by{" "}
          <a href="https://freepik.com" target="_blank" rel="noreferrer">
            <strong>Freepik</strong>
          </a>
        </footer>
      </div>
    </div>
  );
}
