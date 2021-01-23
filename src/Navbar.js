import React, { useState, useRef, useEffect } from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { useGlobalContext } from './context';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { ReactComponent as CaretIcon } from './assets/icons/caret.svg';

import logo from './assets/icons/logo.png';
const Newnb = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();

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
          {/* <NavItem icon={<PlusIcon />} />
          <NavItem icon={<ArrowIcon />} />
          <NavItem icon={<CogIcon />} /> */}

          {/* <NavItem icon={<CaretIcon />}><DropdownMenu /></NavItem> */}
        </ul>
      </nav>
    </>
  );
};

const NavItem = props => {
  const [open, setOpen] = useState(false);
  return (
    <li className="navbar__item">
      <a href="#" className="navbar__link" onClick={() => setOpen(!open)}>
        {/* {props.icon} */}
        Testing
      </a>
      {/* {open && props.children} */}
    </li>
  );
};

// const DropdownMenu = () => {
//   const DropdownItem = props => {
//     return (
//       <a href="#" className="menu-item">
//         <span className="icon-button">{props.leftIcon}</span>
//         {props.children}
//         My Name
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   };

//   return (
//     <div className="dropdown">
//       <DropdownItem leftIcon={<CogIcon />} rightIcon={<BoltIcon />}></DropdownItem>
//     </div>
//   );
// };

export default Newnb;
