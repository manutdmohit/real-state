import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { getMenuStyles } from '../../utils/common';
import useHeaderColor from '../../hooks/useHeaderColor';
import { Link, NavLink } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  // Function to handle menu icon click and toggle the menu
  const handleMenuIconClick = () => {
    setMenuOpened((prevMenuOpened) => !prevMenuOpened);
  };

  // Function to handle menu item click and close the menu
  const handleMenuItemClick = () => {
    setMenuOpened(false);
  };

  // Function to close the menu when clicking outside
  const handleOutsideClick = () => {
    setMenuOpened(false);
  };

  return (
    <header className="h-wrapper" style={{ background: headerColor }}>
      <div className="innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./main_logo.png" alt="logo" width={100} id="logo" />
        </Link>

        {/* Menu wrapped with OutsideClickHandler */}
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
          {/* menu */}
          <div
            className={`h-menu ${menuOpened ? 'open' : ''}`}
            style={getMenuStyles(menuOpened)}
          >
            <NavLink to="/services" onClick={handleMenuItemClick}>
              Service
            </NavLink>
            <NavLink to="/contacts" onClick={handleMenuItemClick}>
              Contact
            </NavLink>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div className="menu-icon" onClick={handleMenuIconClick}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
