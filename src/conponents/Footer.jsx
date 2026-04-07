import React from "react";
import LOGO from "../assets/axiomLogo.png";
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
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-pink-50  text-center  pt-10 pb-2 space-y-5 justify-center items-center flex flex-col text-gray-700">
      <div className="md:flex flex-1 justify-between w-full px-10 space-y-10">
        <div className="flex justify-center items-center">
          <img src={LOGO} width={200} height={100} alt="logo" />
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <h3 className="text-2xl font-semibold text-center">
            Quick Information
          </h3>
          <div className="flex flex-col gap-3 justify-center items-start text-start">
            <p className=" text-xl flex flex-col gap-2">
              <span> Year of Establishment : 2000</span>
              <span>opening hours : 10:00 AM - 5:00 PM (Sun-Mon)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <h3 className="text-2xl font-semibold text-center">Quick Links</h3>
          <div className="flex flex-col gap-3 ml-10 text-start">
            <Link className="hover:scale-105 text-xl" to="/">
              Home
            </Link>
            <Link className="hover:scale-105 text-xl" to="/gallery">
              Gallery
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
          <div className="flex justify-start items-center gap-4">
            <FaLocationArrow />
            <p className="max-w-50 text-xl">
              4-GH-13 Vigyan Nagar, kota-324005, Rajasthan, India
            </p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <FaPhoneAlt />
            <p className="text-xl">+91 9214036552</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <FaEnvelope />
            <p className="text-xl">eventaxiom7@gmail.com</p>
          </div>
          <div className="flex justify-start items-center gap-4">
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
          <Link
            to="https://wa.me/919214036552?text=Hello%20Event%20Axiom!%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
          <Link to="http://instagram.com/weddingsbyanuj/" target="_blank">
            <FaInstagram />
          </Link>
          <Link to="https://youtube.com/@weddingsbyanuj" target="_blank">
            <FaYoutube />
          </Link>
          <Link to="mailto:eventaxiom7@gmail.com" target="_blank">
            <FaGoogle />
          </Link>
        </div>
      </div>
    </div>
  );
}
