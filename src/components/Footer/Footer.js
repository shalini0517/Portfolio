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
      <a href="https://github.com/shalini0517" target="_blank" rel="noopener noreferrer">
        <FaGithub color="white" size="1.5em" />
      </a>
      <a href="https://www.linkedin.com/in/shalini-patel-6343b2218" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="white" size="1.5em" />
      </a>
      <a href="mailto:shalinipatel1702@gmail.com">
        <FaEnvelope color="white" size="1.5em" />
      </a>
    </animated.footer>
    </>
  );
}

export default Footer;