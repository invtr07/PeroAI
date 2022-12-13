import './App.css';
import { Routes, Route,} from "react-router-dom";
import Main from './Generator/Main.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
      {/* made for future navigation */}
        <Route path='/' element= {<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
