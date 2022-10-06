import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
// import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path="/upload" element={<ImageUpload />} /> */}
      </Routes>
    </>
  )
}

export default App
