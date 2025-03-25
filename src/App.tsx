// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {RecoilRoot} from 'recoil';

import './App.css'
import Main from './pages/ProductsMain';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TopNav from './components/layout/TopNav';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
          <Route path="/topNav" element={<TopNav />} />
          <Route path="/sideBar" element={<Sidebar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
