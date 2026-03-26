import { useEffect, useState } from "react";
import vid1 from '../assets/video1.mp4'
import vid2 from '../assets/video2.mp4'
const videos = [
  vid1,
  vid2,
  vid2,
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        <h1 className="text-white text-5xl">Hero Content</h1>
      </div>
    </div>
  );
}
