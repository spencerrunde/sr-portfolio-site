import React from "react";

function Projects({ FaExternalLinkAlt, FaGithub }) {
  return (
    <div className="projects" id="projects">
      <div className="projects__wrapper">
        <div className="projects__title">
          <h4>
            <em>02</em> Projects
          </h4>
        </div>
        <p>
          I'm showcasing a few of my favorite projects below. If you're
          interested in seeing more, head over to my GitHub profile!
        </p>

        <div className="inner__wrapper">
          <div className="project">
            <div className="upper__wrapper">
              <h5>Coffeeroasters Subscription Site</h5>
              <p>
                This multipage site is a mockup of a coffee subscription
                service. Choose what type, how much, what grind, and how often
                you want your coffee delivered.
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>React</em>
                <em>React-Router</em>
                <em>SCSS</em>
                <em>BEM</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/react-coffeeroasters"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://react-coffeeroasters-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="upper__wrapper">
              <h5>Clock App</h5>
              <p>
                This clock app displays both your current time and location with
                dynamic styling. Also includes a programming quote generator if
                you feel like you need some inspiration!
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>React</em>
                <em>API</em>
                <em>SCSS</em>
                <em>BEM</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/react-clock-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://react-clock-app-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="upper__wrapper">
              <h5>Rock Paper Scissors Lizard Spock</h5>
              <p>
                A more advanced version of the classic game. Visit the site,
                take a look at the rules, and see if you can beat the CPU!
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>React</em>
                <em>React-Router</em>
                <em>SCSS</em>
                <em>BEM</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/react-rock-paper-scissors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://react-rock-paper-scissors-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="upper__wrapper">
              <h5>Job Listings with Filtering</h5>
              <p>
                This job board component displays job entries that match the
                filters chosen by the user. Select a tag on one of the jobs and
                the filters bar will appear.
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>React</em>
                <em>SCSS</em>
                <em>BEM</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/react-job-listings"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://react-job-listings-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="upper__wrapper">
              <h5>Planet Facts Site</h5>
              <p>
                A single page app that uses dynamically updating text and images
                to display facts about the eight planets in our solar system. (I
                still miss Pluto.)
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>JS</em>
                <em>SCSS</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/planets-fact-site"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://planet-facts-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="upper__wrapper">
              <h5>GitHub User Search</h5>
              <p>
                Search for any GitHub username, then this app will fetch and
                display some basic information from their profile.
              </p>
            </div>
            <div className="lower__wrapper">
              <div className="project__tags">
                <em>JS</em>
                <em>API</em>
                <em>SCSS</em>
              </div>
              <div className="icon__wrapper">
                <a
                  href="https://github.com/spencerrunde/frontendMentor/tree/master/github-user-search-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size="32" />
                </a>
                <a
                  href="https://github-user-search-sr.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkAlt size="32" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
