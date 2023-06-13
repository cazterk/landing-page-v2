import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavbarLinks } from "./data";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className=" hidden lg:block">
        <div className="flex h-16 bg-white justify-between  items-center px-3 xl:px-96">
          <DesktopMenu links={NavbarLinks} />
        </div>
      </div>

      <div className=" flex justify-between 2xl:hidden p-3">
        <Link to={"/"} className="h-8 w-8 flex items-center lg:hidden ">
          <img src="logo.png" />
          <h4 className="text-sm font-extrabold">CAZTERK</h4>
        </Link>
        <HamburgerMenu isOpen={isOpen} toggle={toggleMenu} />
        {isOpen ? (
          <MobileMenu
            links={NavbarLinks}
            close={toggleMenu}
            onClick={toggleMenu}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
