// Footer.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <>
    <animated.footer style={animation} className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub color="black" size="1.5em" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="black" size="1.5em" />
      </a>
      <a href="mailto:your.email@example.com">
        <FaEnvelope color="black" size="1.5em" />
      </a>
    </animated.footer>
    </>
  );
}

export default Footer;