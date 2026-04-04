import React from "react";
import LOGO from "../assets/titleLogo.png";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-pink-200 text-center  pt-10 pb-2 space-y-5 justify-center items-center flex flex-col">
      <div className="md:flex flex-1 justify-between w-full px-10 space-y-10">
        <div className="flex justify-center items-center">
          <img src={LOGO} width={200} height={100} alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="text-2xl font-semibold text-center">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 ml-10 text-start">
            <p>Home</p>
            <p>Events</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
        </div>
          <div className="flex flex-col gap-2 ml-10 text-start">
            <h3 className="text-2xl font-semibold text-center">Contact Us</h3>
            <div className="flex justify-start items-center gap-2">
              <FaLocationArrow />
              <p className="max-w-50">
                KTVS Garden, Aerodrome, kota-324009, Rajasthan, India
              </p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaPhoneAlt />
              <p>+91 12345 67890</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <FaEnvelope />
              <p>info@eventaxiom.com</p>
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
          <p>
            <FaInstagram />
          </p>
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
