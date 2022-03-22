import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__title">
          <h4>
            <em>03</em> Contact
          </h4>
        </div>
        <h5>Lets get in touch!</h5>
        <p>
          Got a question or want to chat about something? Shoot me a message
          real quick! I'm actively looking for new opportunites, and I'll get
          back to your ASAP.
        </p>
        <a
          href="mailto:spencerrunde@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Email me!
        </a>
      </div>
    </div>
  );
}

export default Contact;
