import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link id="home-link" className="navbar-brand text-white fs-2 fw-bold" to={'/Home'} onClick={() => handleClick('home-link')}>START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto py-4">
              <li className="nav-item">
                <Link id="about-link" className={`nav-link ${activeLink === 'about-link' ? 'bg-main' : ''} text-white fw-bold me-3`} to={'/About'} onClick={() => handleClick('about-link')}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link id="portfolio-link" className={`nav-link ${activeLink === 'portfolio-link' ? 'bg-main' : ''} text-white fw-bold me-3`} to={'/Portfolio'} onClick={() => handleClick('portfolio-link')}>PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link id="contact-link" className={`nav-link ${activeLink === 'contact-link' ? 'bg-main' : ''} text-white fw-bold me-3`} to={'/Contact'} onClick={() => handleClick('contact-link')}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
