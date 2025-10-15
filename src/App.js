import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">JOHN DOE</p> 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link text-white" to="/">HOME</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/service">SERVICES</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/contact">CONTACT</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/legal">MENTION LEGALES</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/legal" element={<Legal/>}></Route>
        </Routes>
      </main>
      <footer className="bg-dark text-white text-white pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="mb-3">John Doe</h5>
              <p className="small">40 rue Laure Diebold<br/> 69000 Lyon, France</p>
              <p className="small">10 20 30 40 50<br/> 
              <a href="mailto:john.doe@gmail.com" className="text-white text-decoration-none">john.doe@gmil.com</a></p>
              <div className="social-icons mt-3">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <h5 className="mb-3">Liens utiles</h5>
              <ul className="list-unstyled">
                <li><a href="#accueil" className="text-white text-decoration-none small">Accueil</a></li>
                <li><a href="#services" className="text-white text-decoration-none small">Services</a></li>
                <li><a href="#portfolio" className="text-white text-decoration-none small">Portfolio</a></li>
                <li><a href="#contact" className="text-white text-decoration-none small">Me contacter</a></li>
                <li><a href="#mentions-legales" className="text-white text-decoration-none small">Mentions légales</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="mb-3">Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li><a href="#realisation-1" className="text-white text-decoration-none small">Fresh Food</a></li>
                <li><a href="#realisation-2" className="text-white text-decoration-none small">Restaurant Akira</a></li>
                <li><a href="#realisation-3" className="text-white text-decoration-none small">Espace bien-être</a></li>
                <li><a href="#realisation-4" className="text-white text-decoration-none small">SEO</a></li>
                <li><a href="#realisation-5" className="text-white text-decoration-none small">Création d'une API</a></li>
                <li><a href="#realisation-6" className="text-white text-decoration-none small">Maquette d'un site</a></li>
              </ul>
            </div>
          </div> 
        </div>
      </footer>
    </div>
  );
};
