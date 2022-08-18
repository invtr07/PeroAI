import './App.css';
import { Routes, Route,} from "react-router-dom";
import GeneratorPage from './pages/TextGenerator/GeneratorPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneratorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
