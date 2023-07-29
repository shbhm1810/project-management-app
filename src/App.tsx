import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div>
    <NavBar/>
   <Routes>
    <Route  path='/' element={<Home/>}/>
   </Routes>
   </div>
  );
}

export default App;
