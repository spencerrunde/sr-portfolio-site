import React, { useEffect, useState } from "react";

function Header({ VscMenu, VscClose }) {
  //setting state
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //toggles between true and false on click
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //closes mobile navigation on link click
  const handleNavbar = () => {
    if (screenWidth < 768) {
      setToggle(!toggle);
    }
  };

  const handleScrollLock = () => {
    if (toggle === true && screenWidth < 768) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = null;
      setToggle(false);
    }
  };

  // mounts and unmounts window size event listener
  useEffect(() => {
    const handleWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    handleScrollLock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle, screenWidth]);

  return (
    <header>
      <div className="header__wrapper">
        <a class="skip" href="#about">
          Skip to content
        </a>
        <div className="header__logo">sr</div>
        {/* only renders if on mobile screen size */}
        {screenWidth < 768 && (
          <button onClick={handleToggle}>
            {toggle === true ? <VscClose size="32" /> : <VscMenu size="32" />}
          </button>
        )}
        {(toggle || screenWidth >= 768) && (
          <nav>
            <a href="#about" onClick={handleNavbar}>
              <em>01</em> about
            </a>
            <a href="#projects" onClick={handleNavbar}>
              <em>02</em> projects
            </a>
            <a href="#contact" onClick={handleNavbar}>
              <em>03</em> contact
            </a>
            <a
              href="/assets/spencer_runde_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavbar}
            >
              <em>04</em> resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
