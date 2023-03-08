import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import UserAccount from './components/UserAccount';

function App() {
  return (
    <Router>
        
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/account' element={ <UserAccount /> }></Route>
        </Routes>
    </Router>
  );
}

export default App;
