import React from "react";

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <button
      className="block lg:hidden text-gray-800 hover:text-black focus:text-black focus:outline-none"
      onClick={toggle}
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        {isOpen ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
          />
        )}
      </svg>
    </button>
  );
};

export default HamburgerMenu;
