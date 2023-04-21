import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mire mi amor mi primera página web online qué me dice
        </p>
        <a
          className="App-link"
          href="https://www.sciencedirect.com/science/article/pii/S1364032122000636?dgcid=coauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click para ver mi paper
        </a>
      </header>
    </div>
  );
}

export default App;
