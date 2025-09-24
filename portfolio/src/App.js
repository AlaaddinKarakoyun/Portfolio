import './App.css';
import Leisure from './Leisure';
import Hometown from './Hometown';
import Life from './Life';
import Interests from './Interests';
import Contact from './Contact';
import Aboutme from './Aboutme';
import Imprint from './Imprint';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
          <div class="header-content">
              <h1>Alaaddin Talha Karakoyun</h1>
              <img src="Picture/Alaaddi_Bewerbungsfoto.jpg" alt="My picture"/>
          </div>
      </header>
      <Router>
      <nav class="main-menu">
            <ul>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active": ""}>Contact</NavLink></li>
                <li><NavLink to="/aboutme" className={({ isActive }) => isActive ? "active": ""}>About me</NavLink></li>
                <li><NavLink to="/imprint" className={({ isActive }) => isActive ? "active": ""}>Imprint</NavLink></li>
            </ul>
        </nav>
      <div class="content-wrapper">
          <nav class="menu">
              <ul>
                  <li><NavLink to="/hometown" className={({ isActive }) => isActive ? "active": ""}>Hometown</NavLink></li>
                  <li><NavLink to="/life" className={({ isActive }) => isActive ? "active": ""}>Life</NavLink></li>
                  <li> <NavLink to="/leisure" className={({ isActive }) => isActive ? "active": ""}>Leisure</NavLink> </li>
                  <li><NavLink to="/interests" className={({ isActive }) => isActive ? "active": ""}>Interests</NavLink></li>
              </ul>
          </nav>
          <Routes>
            <Route path="/leisure" element={<Leisure />} />
            <Route path='/hometown' element={<Hometown/>}/>
            <Route path='/life' element={<Life/>}/>
            <Route path='/interests' element={<Interests/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboutme' element={<Aboutme/>}/>
            <Route path='/imprint' element={<Imprint/>}/>
          </Routes>
          </div>
        </Router>

    </div>
    
  );
}

export default App;
