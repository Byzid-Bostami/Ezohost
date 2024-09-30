import Home from './pages/Home';
import Contact from './pages/Contact'
import Console from './pages/Console'

import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Console" element={<Console />} />
    </Routes>
     
    </>
  )
}

export default App
