import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';

function App() {

  

  return (
    <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
    </BrowserRouter>
  )
}


function Appbar(){

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  )
}

export default App
