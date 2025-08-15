import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
// Adjust these offsets (in px) for each section ID
  const sectionOffsets = {
    about: -250,       
    projects: -400,
    contact: 0       
  };

  const links = document.querySelectorAll('a.nav-link[href^="#"]');

  function handleClick(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    const sectionTop = target.offsetTop;
    const sectionHeight = target.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Base position to align section bottom with viewport bottom
    let scrollPosition = sectionTop + sectionHeight - viewportHeight;

    // Apply custom offset if defined
    if (sectionOffsets.hasOwnProperty(targetId)) {
      scrollPosition += sectionOffsets[targetId];
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  links.forEach(link => link.addEventListener('click', handleClick));

  return () => {
    links.forEach(link => link.removeEventListener('click', handleClick));
  };

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top glass-navbar">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item"><a className="nav-link px-4" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;