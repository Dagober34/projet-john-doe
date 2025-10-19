import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import './App.css'
// Liens vers les pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        {/* Création de la barre de navigation commun à toute les pages */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Le logos du sites */}
            <p className="navbar-brand">JOHN DOE</p> 
            {/* Menu Burger */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Création de la liste des liens Hypertexte */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><NavLink className="nav-link text-white custom-link" to="/">HOME</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-white custom-link" to="/service">SERVICES</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-white custom-link" to="/portfolio">PORTFOLIO</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-white custom-link" to="/contact">CONTACT</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-white custom-link" to="/legal">MENTION LEGALES</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Menus Burger */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/legal" element={<Legal/>}></Route>
        </Routes>
      </main>
      {/* Création du pied de pages communs à toutes les cases*/}
      <footer className="bg-dark text-white text-white pt-5 pb-4 mt-5">
        {/* Pied de page divisé en trois partie égales */}
        <div className="container">
          <div className="row">
            {/* Première partie : coordonnées avec réseaux sociaux */}
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="mb-3">John Doe</h5>
              <p className="small">40 rue Laure Diebold<br/> 69000 Lyon, France</p>
              <p className="small">10 20 30 40 50<br/> 
              <a href="mailto:john.doe@gmail.com" className="text-white text-decoration-none">john.doe@gmail.com</a></p>
              <div className="social-icons mt-3">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></a>
              </div>
            </div>
            {/* Deuxième partie : Liens Hypertexte */}
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="mb-3">Liens utiles</h5>
              <ul className="list-unstyled">
                <li><Link className="nav-link text-white" to="/">Accueil</Link></li>
                <li><Link className="nav-link text-white" to="/service">Services</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">Portfolio</Link></li>
                <li><Link className="nav-link text-white" to="/contact">Me contacter</Link></li>
                <li><Link className="nav-link text-white" to="/legal">Mentions légales</Link></li>
              </ul>
            </div>
            {/* Troizième partie : liste de réaliations */}
            <div className="col-md-4 mb-4">
              <h5 className="mb-3">Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li><Link className="nav-link text-white" to="/portfolio">Fresh Food</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">Restaurant Akira</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">Espace bien-être</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">SEO</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">Création d'une API</Link></li>
                <li><Link className="nav-link text-white" to="/portfolio">Maquette d'un site</Link></li>
              </ul>
            </div>
          </div> 
        </div>
      </footer>
    </div>
  );
};
