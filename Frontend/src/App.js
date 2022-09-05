import './App.css';
import { Routes, Route,} from "react-router-dom";

//navigation pages
import GeneratorPage from './pages/TextGenerator/GeneratorPage.jsx';
import BrainstormPage from './pages/Brainstorm/BrainstormPage.jsx';
import WritingHelperPage from './pages/WritingHelper/WritingHelperPage.jsx';
import ProfilePage from './pages/Profile/ProfilePage.jsx';
import SavingsPage from './pages/Savings/SavingsPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneratorPage/>} />
        <Route path='/brainstorm' element= {<BrainstormPage/>}/>
        <Route path='/writinghelper' element={<WritingHelperPage/>} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/saving' element={<SavingsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
