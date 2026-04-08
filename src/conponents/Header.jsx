import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/Ea.png";
import { HiMenu, HiX } from "react-icons/hi";
export default function Header() {
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
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
            }
          >
            Gallery
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
            className="className= bg-linear-to-r from-purple-300 to-pink-300 p-2 rounded hover:border hover:border-red-500 hover:shadow-sm hover:shadow-purple-900 text-sm text-black"
          >
            Contact Us
          </NavLink>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <img src={LOGO} width={120} alt="logo" />
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <HiX />
            </button>
          </div>

          <nav className="flex flex-col gap-6 p-6 text-lg font-semibold">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-linear-to-r from-purple-400 to-pink-400 text-white p-2 rounded text-center"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
