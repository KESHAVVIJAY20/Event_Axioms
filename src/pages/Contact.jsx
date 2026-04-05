import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
          className="text-center text-gray-600 mb-16 max-w-xl mx-auto"
          data-aos="fade-up"
        >
          Whether it's a wedding, corporate event, or birthday bash, we bring
          your vision to life.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" className="space-y-6 text-white">
            <h2 className="text-4xl font-bold font-serif ">Get in Touch</h2>
            <p className="text-gray-600">
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
                  <label className="absolute left-4 top-4 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-pink-400 peer-focus:text-xs">
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
              <label className="absolute left-4 top-4 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-pink-400 peer-focus:text-xs">
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
        <div
          className="mt-20 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl"
          data-aos="fade-up"
        >
          <iframe
            title="Axiom's KTVS Marriage Garden Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.123456789!2d75.839123!3d25.170456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39764d123456789%3A0xabcdef123456789!2sAxiom's%20KTVS%20Marriage%20Garden!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            className="w-full h-80 border-0 rounded-xl"
            loading="lazy"
          ></iframe>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 transition p-4 rounded-full shadow-xl z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.826 11.826 0 0 0-16.66 0c-4.65 4.65-4.65 12.19 0 16.84l-1.6 5.85 6.03-1.57c4.65 4.65 12.19 4.65 16.84 0a11.826 11.826 0 0 0 0-16.66zm-9.52 16c-2.22 0-4.39-.6-6.3-1.73l-.45-.27-3.67.96.97-3.64-.29-.47A9.896 9.896 0 0 1 3 12c0-5.25 4.27-9.52 9.52-9.52S22 6.75 22 12 17.25 19.48 12 19.48zm5.4-7.88c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15s-.77.98-.94 1.18-.34.22-.63.07c-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.15.2-.25.3-.42.1-.18.05-.33-.02-.5-.07-.17-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.02-.37-.02-.57-.02s-.5.07-.77.33c-.27.25-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.78-.72 2.03-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.55-.35z" />
          </svg>
        </a>
      </div>{" "}
      <Footer />
    </>
  );
}
