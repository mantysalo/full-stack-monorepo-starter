import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((json) => setState(json.data))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
