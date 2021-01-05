
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const title = "Hello world"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
