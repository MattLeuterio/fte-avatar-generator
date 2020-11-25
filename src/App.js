import './App.css';
import ColorPick from './components/ColorPick/index.jsx';
import GlobalLayout from './ui/layout/GlobalLayout';
import Header from './atoms/Header';

// Resolve bug's height on Mobile Device
// I need this only on Mobile Device
const deviceWidth = window.innerWidth;
if (deviceWidth < 577) {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  return (
    <div className="App">
      <GlobalLayout>
        <Header />
        <main>
          <ColorPick />
        </main>
      </GlobalLayout>
    </div>
  );
}

export default App;
