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
      <div className=" hidden sm:block">
        <div className="flex h-16 bg-white justify-between px-96 items-center">
          <DesktopMenu links={NavbarLinks} />
        </div>
      </div>

      <div className=" flex justify-between sm:hidden p-3">
        <Link to={"/"}>Logo</Link>
        <HamburgerMenu isOpen={isOpen} toggle={toggleMenu} />
        {isOpen ? <MobileMenu links={NavbarLinks} close={toggleMenu} /> : <></>}
      </div>
    </div>
  );
};

export default Sidebar;
