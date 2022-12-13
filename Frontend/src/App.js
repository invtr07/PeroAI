import './App.css';
import { Routes, Route,} from "react-router-dom";

//navigation pages
import BrainstormPage from './pages/Brainstorm/BrainstormPage.jsx';
import ProfilePage from './pages/Profile/ProfilePage.jsx';
import SavingsPage from './pages/Savings/SavingsPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<BrainstormPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/saving' element={<SavingsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
