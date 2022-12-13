import './App.css';
import { Routes, Route,} from "react-router-dom";
import MainPage from './Generator/MainPage.jsx';
import Tree from './Generator/Tree.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
      {/* made for future navigation */}
        <Route path='/' element= {<MainPage/>}/>
        <Route path='/newtree' element= {<Tree/>}/>
      </Routes>
    </div>
  );
}

export default App;
