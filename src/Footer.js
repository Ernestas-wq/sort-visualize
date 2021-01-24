import React from 'react';
import logo from './assets/icons/logo.png';
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__left">
          <img src={logo} alt="" className="footer__logo" />
          <div className="footer__title">
            <p>
              <span>S</span>ort <span>V</span>isualizer
            </p>
          </div>
        </div>
        <div className="footer__right">
          <a href="https://github.com/Ernestas-wq/sort-visualize">Source Code</a>
          <AiFillGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
