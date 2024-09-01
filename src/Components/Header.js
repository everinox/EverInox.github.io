import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import Zmage from 'react-zmage';

const Header = ({ data }) => {
  if (!data) return null;

  const { name, description, image, image2, bio2 } = data;

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <Zmage alt={name} src={`images/${image2}`} />
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{bio2}</h3>
          </Fade>
          <Fade bottom>
            <Zmage alt={name} src={`images/${image}`} />
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}</h3>
          </Fade>

          <hr />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
