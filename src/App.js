import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aquí pondremos estrategias del age of empoire
        </p>
        <a
          className="App-link"
          href="https://www.sciencedirect.com/science/article/pii/S1364032122000636?dgcid=coauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click aqui para ver mi paper del COVID
        </a>
      </header>
    </div>
  );
}

export default App;
