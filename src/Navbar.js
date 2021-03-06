import React, { useRef, useEffect } from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { useGlobalContext } from './context';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from './assets/icons/logo.png';
const Newnb = () => {
  const {
    isSidebarOpen,
    closeSidebar,
    openSidebar,
    isDarkMode,
    toggleDarkMode,
  } = useGlobalContext();

  const linksContainerRef = useRef(null);
  useEffect(() => {
    if (isSidebarOpen) {
      linksContainerRef.current.style.transform = 'translateX(0%)';
    } else {
      linksContainerRef.current.style.transform = 'translateX(-100%)';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <img className="navbar__logo" src={logo} alt="" />
          <h4>
            <span>S</span>ort <span>V</span>isualizer
          </h4>
        </div>
        <button
          className="navbar__darkmode"
          onClick={() => {
            toggleDarkMode();
          }}
        >
          {isDarkMode ? 'Day Mode' : 'Night Mode'}
        </button>
        <button className="navbar__open" onClick={openSidebar}>
          <VscThreeBars />
        </button>
        <ul className="navbar__links" ref={linksContainerRef}>
          <button className="navbar__close" onClick={closeSidebar}>
            <AiOutlineClose />
          </button>
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/algorythms" className="navbar__link">
              Algorythms
            </Link>
          </li>
          <li className="navbar__item">
            <a
              className="navbar__link"
              href="https://ernestas-portfolio.netlify.app/"
              target="_blank"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Newnb;
