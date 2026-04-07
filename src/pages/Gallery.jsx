import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import v1 from "../assets/video1.mp4";
import v2 from "../assets/video2.mp4";
import v3 from "../assets/video3.mp4";
import v4 from "../assets/video4.mp4";
import v5 from "../assets/video5.mp4";
import v6 from "../assets/video6.mp4";

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "Royal Wedding",
      type: "Wedding",
      desc: "A luxurious wedding with elegant decor and grand celebrations.",
      media: v1,
      isVideo: true,
    },
    {
      id: 2,
      title: "Corporate Meet",
      type: "Corporate",
      desc: "Professional event with premium arrangements and branding.",
      media: v2,
      isVideo: true,
    },
    {
      id: 3,
      title: "Birthday Bash",
      type: "Birthday",
      desc: "Fun-filled birthday event with vibrant theme setup.",
      media: v3,
      isVideo: true,
    },
    {
      id: 4,
      title: "Engagement Ceremony",
      type: "Engagement",
      desc: "Beautiful engagement with romantic ambiance.",
      media: v4,
      isVideo: true,
    },
    {
      id: 5,
      title: "Engagement Ceremony",
      type: "Engagement",
      desc: "Beautiful engagement with romantic ambiance.",
      media: v5,
      isVideo: true,
    },
    {
      id: 6,
      title: "Engagement Ceremony",
      type: "Engagement",
      desc: "Beautiful engagement with romantic ambiance.",
      media: v6,
      isVideo: true,
    },
  ];

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
              className="group relative overflow-hidden rounded-2xl shadow-lg"
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
