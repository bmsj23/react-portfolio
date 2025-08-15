import React, { useState, useEffect, useRef } from 'react';
import acupProject from '../assets/images/acup-project.png';
import budgetCalculatorProject from '../assets/images/budgetcalculator-project.png';
import spotifySongProject from '../assets/images/spotifysong-project.png';

function Projects() {
  const [bgColor, setBgColor] = useState("#f8f9fa");
  const sectionRef = useRef(null);

  // animation effect for the projects section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !section.classList.contains("slide-up-in")) {
            section.classList.add("stacking");
            setTimeout(() => section.classList.add("slide-up-in"), 10);
            setTimeout(() => section.classList.remove("stacking"), 800);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // background color randomizer on container onclick
  const randomizeContainerColor = (e) => {

    // do not change color if clicking on buttons, links, titles, or input fields
    if (e.target.closest('button, a, input, textarea')) {
      return;
    }

    const randomHue = Math.floor(Math.random() * 360);
    setBgColor(`hsl(${randomHue}, 70%, 85%)`);
  };

  return (
    <>
      <section id="projects" ref={sectionRef} className="projects-section">
        <div className="container">
          <h2 className="projects-main-title mb-4 text-center">Featured Projects</h2>
          <div
            className="projects-container p-4 rounded"
            style={{ backgroundColor: bgColor }}
            onClick={randomizeContainerColor}
          >
            <div className="card-container row g-4">

              <div className="col-md-4">
                <div className="card projects-card h-100 stack-card">
                  <div className="card-img-wrap">
                    <img src={acupProject} className="card-img-top" alt="Ancillary Communication and Updates Platform" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title projects-title" data-bg="#e3f2fd" data-bs-target="#project1Modal">Ancillary Communication and Updates Platform</h5>
                    <p className="card-text">A centralized platform for communication and updates in Mary Mediatrix Medical Center's Ancillary Division.</p>
                    <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#project1Modal">More Details</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card projects-card h-100 stack-card">
                  <div className="card-img-wrap">
                    <img src={budgetCalculatorProject} className="card-img-top" alt="Budget Calculator" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title projects-title" data-bg="#fce4ec" data-bs-target="#project2Modal">Budget Calculator</h5>
                    <p className="card-text">A calculator to acquire how much you should save in a day/week/month to afford your wants/needs.</p>
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#project2Modal">More Details</button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card projects-card h-100 stack-card">
                  <div className="card-img-wrap">
                    <img src={spotifySongProject} className="card-img-top" alt="Mood-Based Random Spotify Song Generator" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title projects-title" data-bg="#e8f5e9" data-bs-target="#project3Modal">Mood-Based Random Spotify Song Generator</h5>
                    <p className="card-text">Generates a random song from Spotify based on your current mood.</p>
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#project3Modal">More Details</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div className="modal fade" id="project1Modal" tabIndex="-1" aria-labelledby="project1ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project1ModalLabel">Ancillary Communication and Updates Platform</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This project is a centralized platform for communication and updates within Mary Mediatrix Medical Center's Ancillary Division. It facilitates real-time announcements, scheduling, and collaborative tools for staff members.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="project2Modal" tabIndex="-1" aria-labelledby="project2ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project2ModalLabel">Budget Calculator</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This budget calculator helps users determine how much money they need to save daily, weekly, or monthly to afford their desired purchases or expenses.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="project3Modal" tabIndex="-1" aria-labelledby="project3ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project3ModalLabel">Mood-Based Random Spotify Song Generator</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This project generates a random song from Spotify tailored to the user's current mood, helping discover new music aligned with how they feel.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;