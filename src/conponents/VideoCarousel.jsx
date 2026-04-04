import { useEffect, useState } from "react";
import vid1 from "../assets/video1.mp4";
import vid2 from "../assets/video2.mp4";
import vid3 from "../assets/video3.mp4";
import vid4 from "../assets/video4.mp4";
import vid5 from "../assets/video5.mp4";
import vid6 from "../assets/video6.mp4";
import vid7 from "../assets/video7.mp4";
import vid8 from "../assets/video8.mp4";

import { Link } from "react-router-dom";
import Counter from "./Counter";
const videos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden mask-[linear-gradient(to_top,transparent_0%,black_10%)]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {videos.map((video, index) => (
          <div key={index} className="min-w-full h-full">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${current === index ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center space-y-5 justify-center items-center flex flex-col">
          <h1 className="text-white md:text-5xl text-4xl w-full font-bold ">
            Crafting Unforgettable <br /><span className="md:text-8xl text-6xl">Experiences !</span>
          </h1>
          <p className="text-white text-sm w-full">
            Luxury events, weddings & celebrations tailored to perfection.
          </p>
          <div className="flex gap-10 justify-center mt-10">
            <div className="text-center">
              <Counter target={500} />
              <p className="text-white">Happy Clients</p>
            </div>

            <div className="text-center">
              <Counter target={1200} />
              <p className="text-white">Projects</p>
            </div>

            <div className="text-center">
              <Counter target={50} />
              <p className="text-white">Events</p>
            </div>
          </div>
          <Link to="/events">
            <p className="bg-amber-300 p-2 rounded font-semibold w-50">
              Explore Events
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
