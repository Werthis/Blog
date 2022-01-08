import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// for json server write:
// npx json-server --watch data/dataBase.json --port 8000

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
