import {
  BrowserRouter as Router,
  Route, Routes 
} from 'react-router-dom';

import './App.css';
import Root from './pages/Root';
import Login from './pages/Login';
import Home from './pages/Home';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/profile' element={<Courses/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
