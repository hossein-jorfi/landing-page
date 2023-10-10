import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      {/* Dextop */}
      <ul className="list-none hidden sm:flex justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* Dextop */}

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          alt="menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 space-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-base text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile */}
    </nav>
  );
};

export default NavBar;
