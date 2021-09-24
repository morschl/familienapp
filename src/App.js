import './App.css';
import AppHeader from './components/AppHeader';
import Netzwerk from './components/Netzwerk';

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Netzwerk />

       {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
