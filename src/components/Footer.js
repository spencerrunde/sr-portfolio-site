import React from "react";

function Footer({ FaGithub, FaLinkedin, VscMail }) {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__socials">
          <a
            href="https://github.com/spencerrunde"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size="32" />
          </a>
          <a
            href="https://www.linkedin.com/in/spencerrunde/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size="32" />
          </a>
          <a
            href="mailto:spencerrunde@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <VscMail size="32" />
          </a>
        </div>
        <p>Designed and built by Spencer Runde</p>
      </div>
    </footer>
  );
}

export default Footer;
