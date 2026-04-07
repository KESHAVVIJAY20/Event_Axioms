import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message Sent Successfully!");
          setFormData({ name: "", email: "", event: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops! Something went wrong.");
        },
      );
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-linear-to-r from-pink-300 via-pink-200 to-white py-24 px-6">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl text-center font-bold text-pink-500 mb-4"
          data-aos="fade-down"
        >
          Let’s Plan Your Perfect Event
        </h1>
        <p
          className="text-center text-black mb-16 max-w-xl mx-auto"
          data-aos="fade-up"
        >
          Whether it's a wedding, corporate event, or birthday bash, we bring
          your vision to life.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-6 text-black">
            <h2 className="text-4xl font-bold font-serif ">Get in Touch</h2>
            <p className="text-black">
              We’d love to hear from you. Reach out for bookings,
              collaborations, or queries.
            </p>
            <div className="space-y-3">
              <p>📍 Exact Location</p>
              <p>📞 +91 9876543210</p>
              <p>📧 info@eventaxioms.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <Link to="/instagram" className="hover:text-pink-200 transition">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link to="/facebook" className="hover:text-blue-200 transition">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link to="/linkedin" className="hover:text-blue-400 transition">
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link to="/google" className="hover:text-red-500 transition">
                <FaGoogle className="text-2xl" />
              </Link>
              <Link to="/twitter" className="hover:text-blue-400 transition">
                <FaTwitter className="text-2xl" />
              </Link>
              <Link to="/youtube" className="hover:text-red-400 transition">
                <FaYoutube className="text-2xl" />
              </Link>
            </div>
          </div>

          {/* Glassmorphism Form */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl"
          >
            {status && (
              <p className="text-center text-green-300 font-semibold">
                {status}
              </p>
            )}

            {["name", "email", "event"].map((field) => {
              const placeholder =
                field === "event"
                  ? "Event Type (Wedding, Corporate...)"
                  : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`;
              const type = field === "email" ? "email" : "text";
              return (
                <div key={field} className="relative">
                  <input
                    type={type}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="peer w-full p-4 rounded-lg bg-transparent border border-gray-400 text-white placeholder-transparent focus:outline-none focus:border-pink-400"
                    placeholder={placeholder}
                  />
                  <label className="absolute left-4 top-4 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-black peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-pink-400 peer-focus:text-xs">
                    {placeholder}
                  </label>
                </div>
              );
            })}

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="peer w-full p-4 rounded-lg bg-transparent border border-gray-400 text-white placeholder-transparent focus:outline-none focus:border-pink-400"
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-black peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-pink-400 peer-focus:text-xs">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 transition p-3 rounded-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-100 rounded-2xl overflow-hidden shadow-xl mt-10">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=25.1548145,75.8593441&z=15&output=embed"
          ></iframe>
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}
