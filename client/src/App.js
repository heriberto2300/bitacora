import {
  BrowserRouter as Router,
  Route, Routes 
} from 'react-router-dom';

import './App.css';
import Root from './pages/Root';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
