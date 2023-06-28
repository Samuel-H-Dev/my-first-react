import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
Im getting hungy! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (at Boca Code)
        </a>
      </header>
    </div>
  );
}

export default App;
