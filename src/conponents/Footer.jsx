import React from "react";
import LOGO from "../assets/titleLogo.png";
import {
  FaCashRegister,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaRegistered,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-pink-200 text-center  pt-10 pb-2 space-y-5 justify-center items-center flex flex-col">
      <div className="md:flex flex-1 justify-between w-full px-10 space-y-10">
        <div className="flex justify-center items-center">
          <img src={LOGO} width={200} height={100} alt="logo" />
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <h3 className="text-2xl font-semibold text-center">
            Quick Information
          </h3>
          <div className="flex flex-col gap-3 justify-center items-start text-start">
            <p className="hover:scale-105 text-xl flex flex-col gap-2">
              <span> Year of Establishment : 2007</span>
              <span>opening hours : 10:00 AM - 7:00 PM (Sun-Mon)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <h3 className="text-2xl font-semibold text-center">Quick Links</h3>
          <div className="flex flex-col gap-3 ml-10 text-start">
            <Link className="hover:scale-105 text-xl" to="/">
              Home
            </Link>
            <Link className="hover:scale-105 text-xl" to="/events">
              Events
            </Link>
            <Link className="hover:scale-105 text-xl" to="/about">
              About
            </Link>
            <Link className="hover:scale-105 text-xl" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2  text-start justify-start items-start">
          <h3 className="text-2xl font-semibold text-center">Contact Us</h3>
          <div className="flex justify-start items-center gap-2">
            <FaLocationArrow />
            <p className="max-w-50 text-xl">
              KTVS Garden, Aerodrome, kota-324009, Rajasthan, India
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaPhoneAlt />
            <p className="text-xl">+91 12345 67890</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaEnvelope />
            <p className="text-xl">info@eventaxiom.com</p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaCashRegister />
            <p className="text-xl">GSTIN : 08ACKPV4013A2ZU</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-lg italic">
        “Every event tells a story — we make yours unforgettable.”
      </p>
      <div className="md:flex flex-wrap-reverse justify-between w-full md:px-10">
        <p>© 2026 Event Axiom. All Rights Reserved.</p>
        <div className="flex gap-2 justify-center items-center">
          <h3 className="md:text-lg text-xs font-semibold">Follow Us</h3>
          <p>
            <FaFacebook />
          </p>
          <Link to="http://instagram.com/weddingsbyanuj/" target="_blank">
            <FaInstagram />
          </Link>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaYoutube />
          </p>
          <p>
            <FaGoogle />
          </p>
        </div>
      </div>
    </div>
  );
}
