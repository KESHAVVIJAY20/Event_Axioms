import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/Ea.png";
import { HiMenu, HiX } from "react-icons/hi";
import EnquiryModal from "./EnquiryModal";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-10000 bg-white shadow-md md:p-0 p-5">
      <div className="flex justify-between items-center md:px-20 py-1">
        <Link to="/">
          {" "}
          {/* <p className="text-3xl font-bold cursor-pointer">Event Axiom</p> */}
          <img src={LOGO} width={200} height={200} alt="" />
        </Link>
        <nav className="hidden md:flex justify-center items-center md:gap-10 md:text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
            }
          >
            Contact Us
          </NavLink>
          <button
            onClick={() => setOpen(true)}
            className="linear-gradient bg-linear-to-r from-teal-600 to-teal-600 p-2 rounded hover:shadow-sm hover:shadow-purple-900 text-sm text-white"
          >
            Schedule Now
          </button>
          <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact us
          </NavLink>
          <button className="bg-purple-600 p-2 rounded hover:shadow-sm hover:shadow-purple-900 text-sm text-white">
            Schedule Now
          </button>
        </nav>
      </div>
    </header>
  );
}
