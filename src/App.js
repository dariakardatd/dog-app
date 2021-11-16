import logo from "./logo.svg";
// import dogLogo from "./images/dogLogo.svg";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header 
        title="Dog catalogue" 
        subtitle={["page 1", "page 2", "page 3"]}
        />


      {/* <Header title="Cat catalogue" subtitle="list of my prefered cats " /> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
