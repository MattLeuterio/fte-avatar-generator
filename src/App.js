import logo from './ui/assets/img/logo-fte.png';
import './App.css';
import ColorPick from './components/ColorPick/index.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <h2>FLAT EARTH ESPORTS</h2>
        <h1>AVATAR GENERATOR</h1>
      </header>
      <main>
        <ColorPick />
      </main>
    </div>
  );
}

export default App;
