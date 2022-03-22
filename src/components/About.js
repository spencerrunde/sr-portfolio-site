import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <div className="about__title">
          <h4>
            <em>01</em> About
          </h4>
        </div>
        <div className="inner__wrapper">
          <div className="text__wrapper">
            <p>
              Hey again! I'm Spencer Runde, and I love crafting the front-end of
              websites and applications. Essentially, anything that the user can
              see and interact with when they're visiting somewhere on the
              internet. I started doing this back in fourth grade, and I've
              loved it ever since. I don't know what I'd be doing now if I
              hadn't found that ancient HTML book in our school's library.
            </p>
            <p>
              One of my main goals is to make sure I stay ahead of the curve as
              technology continues to advance. New frameworks and libraries
              interest me greatly, along with updates and revisions to existing
              languages (think HTML5 or JS ES6).
            </p>
            <p>
              <em>
                "Some see self-doubt as an invitation to be greater." - Francis
                Magee
              </em>
            </p>
          </div>
          <img src="/assets/beard.png" alt="Spencer Runde" />
        </div>
      </div>
    </div>
  );
}

export default About;
