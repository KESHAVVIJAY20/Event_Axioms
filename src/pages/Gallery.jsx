import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import { useNavigate } from "react-router-dom";
import { events } from "../data/Events";

export default function Gallery() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div className=" py-20 px-6">
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl text-center font-bold mb-16 font-serif text-pink-600"
          data-aos="fade-up"
        >
          A Showcase of Celebrations
        </h1>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => navigate(`/gallery/${event.id}`)}
            >
              {/* Media */}
              {event.isVideo ? (
                <video
                  src={event.media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              ) : (
                <img
                  src={event.media}
                  alt={event.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4 text-white">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-sm text-gray-300 mb-2">{event.type}</p>
                <p className="text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
