import React, { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  // Check HTML5 validity
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);

  const honeypot = formData.get("website");
  if (honeypot) {
    setStatus("success");
    form.reset();
    return;
  }

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    _subject: "New message from portfolio contact form",
  };

  try {
    setIsSubmitting(true);
    setStatus(null);
    const response = await fetch(
      `https://formspree.io/f/${formspreeFormId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="contact-text mb-4 text-center">Contact Me</h2>
        <div className="row justify-content-center">
          <p className="contact-desc">
            Have any concerns or wishes? Fill-up the form below!
          </p>
          <div className="col-md-6">
            <form
              id="contactForm"
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="text" name="website" className="d-none" tabIndex="-1" autoComplete="off" />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" name="email" placeholder="johndoe@gmail.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" name="message" rows="4" placeholder="Type your message here..." required></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-custom w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <div className="alert alert-success mt-3 mb-0" role="alert">
                  Thank you! Your message has been sent.
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3 mb-0" role="alert">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
