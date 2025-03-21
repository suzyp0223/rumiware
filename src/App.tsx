import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TopNav from './components/layout/TopNav';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/topNav" element={<TopNav />} />
        <Route path="/sideBar" element={<Sidebar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
