import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I will respond as soon as possible.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="contact-text mb-4 text-center">Contact Me</h2>
        <div className="row justify-content-center">
          <p className="contact-desc">Have any concerns or wishes? Fill-up the form below!</p>
          <div className="col-md-6">
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="johndoe@gmail.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-custom w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;