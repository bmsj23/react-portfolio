import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    // Adjust these offsets (in px) for each section ID
    const sectionOffsets = {
      about: -250,
      projects: -400,
      contact: 0,
    };

    const links = document.querySelectorAll('a.nav-link[href^="#"]');

    function handleClick(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      // On small screens just scroll to the section top for better UX
      const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
      if (isSmallScreen) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const sectionTop = target.offsetTop;
      const sectionHeight = target.offsetHeight;
      const viewportHeight = window.innerHeight;

      let scrollPosition = sectionTop + sectionHeight - viewportHeight;

      if (sectionOffsets.hasOwnProperty(targetId)) {
        scrollPosition += sectionOffsets[targetId];
      }

      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <nav className="navbar navbar-light fixed-top glass-navbar">
      <div className="container">
        <ul className="navbar-nav flex-row justify-content-center w-100">
          <li className="nav-item">
            <a className="nav-link px-3" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
