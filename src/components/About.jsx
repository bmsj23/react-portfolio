import React, { useEffect, useState, useMemo } from 'react';
import benePic from '../assets/images/bene_pic.png';

function TypingName() {
  const parts = useMemo(() => [
    { text: "Hi! I'm", color: "#333333" },
    { text: "Benedict", color: "#329c4e" },
    { text: "San Juan", color: "#333333" }
  ], []);

  const [displayed, setDisplayed] = useState(parts.map(() => ""));
  const [partIndex, setPartIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (partIndex >= parts.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => {
        const newDisplayed = [...prev];
        newDisplayed[partIndex] += parts[partIndex].text[charIndex];
        return newDisplayed;
      });

      if (charIndex + 1 === parts[partIndex].text.length) {
        setPartIndex(partIndex + 1);
        setCharIndex(0);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, 90);

    return () => clearTimeout(timeout);
  }, [charIndex, partIndex, parts]);

  return (
    <h2 className="mb-3 my-name">
      <span style={{ color: parts[0].color }}>{displayed[0]}</span>{' '}
      <span style={{ color: parts[1].color }}>{displayed[1]}</span>{' '}
      <span style={{ color: parts[2].color }}>{displayed[2]}</span>
      <span className="cursor"></span>
    </h2>
  );
}

function About() {
  return (
    <>
      <section id="about" className="about-section py-5 mt-navbar">
          <div class="noise-overlay"></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0" style={{ position: 'relative', height: '360px' }}>
              <div className="glassDiv">
                <div className="liquidGlassOverlay" />
                <img
                  src={benePic}
                  alt="My Portrait"
                  className="glass-img"
                />
              </div>
            </div>

            <div className="col-md-8">
              <TypingName />
              <p>
                A third-year BS Computer Science student who is a passionate and an aspiring software
                engineer. I enjoy building clean, user-friendly websites and learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
