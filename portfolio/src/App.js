import './App.css';
import Leisure from './Leisure';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
          <div class="header-content">
              <h1>Alaaddin Talha Karakoyun</h1>
              <img src="Picture/Alaaddi_Bewerbungsfoto.jpg" alt="My picture"/>
          </div>
      </header>
      <nav class="main-menu">
          <ul>
              <li><a href="Kontakt.html">Kontakt</a></li>
              <li><a href="ubermich.html">Über mich</a></li>
              <li><a href="Impressum.html">Impressum</a></li>
          </ul>
      </nav>
      <div class="content-wrapper">
        <Router>
          <nav class="menu">
              <ul>
                  <li><a href="default.html">Herkunft</a></li>
                  <li><a href="Lebenslauf.html">Lebenslauf</a></li>
                  <li> <Link to="/leisure">Leisure</Link> </li>
                  <li><a href="Interessen.html">Interessen</a></li>
              </ul>
          </nav>
          <Routes>
            <Route path="/leisure" element={<Leisure />} />
          </Routes>
        </Router>

    </div>
    </div>
  );
}

export default App;
