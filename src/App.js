import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reference Data types use same memory</h1>
      <button onClick={window["run"]}>Click</button>
      </header>
    </div>
  );
}

export default App;
