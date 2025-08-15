import React from 'react';

function Footer() {
    return (
        <section id="footer" className="text-center">
        <div className="container wide">
            <p>© 2025 Benedict San Juan. Made with React + Vite.</p>
            <div className="social-icons">
            <a href="http://github.com/bmsj23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href="https://ph.linkedin.com/in/benedict-san-juan-8b4904151?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ms-3">
                <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a href="mailto:benedict_sanjuan@dlsl.edu.ph" aria-label="Email" className="ms-3">
                <i className="fa-solid fa-envelope fa-lg"></i>
            </a>
            </div>
        </div>
        </section>
    );
}

export default Footer;