import { useNavigate } from "react-router-dom";
import v1 from "../assets/video1.mp4";
import v2 from "../assets/video2.mp4";
import v3 from "../assets/video3.mp4";
import v4 from "../assets/video4.mp4";
import v5 from "../assets/video5.mp4";
import v6 from "../assets/video6.mp4";
import { events } from "../data/Events";
export default function EventMarquee() {
  const navigate = useNavigate();
  // const events = [
  //   {
  //     id: 1,
  //     title: "Wedding",
  //     media: v1,
  //     isVideo: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Concert",
  //     media: v2,
  //     isVideo: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Corporate",
  //     media: v3,
  //     isVideo: true,
  //   },
  //   {
  //     id: 4,
  //     title: "Birthday",
  //     media: v4,
  //     isVideo: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Festival",
  //     media: v5,
  //     isVideo: true,
  //   },
  //   {
  //     id: 6,
  //     title: "Festival",
  //     media: v6,
  //     isVideo: true,
  //   },
  // ];

  return (
    <div>
      <div className="flex gap-6 animate-marquee">
        {/* Duplicate items for smooth loop */}
        {[...events, ...events].map((event, index) => (
          <div
            key={index}
            onClick={() => navigate(`/gallery/${event.id}`)}
            className="bg-white rounded-xl shadow-lg cursor-pointer"
          >
            {event.isVideo ? (
                <video
                  src={event.media}
                  autoPlay
                  loop
                  muted
                  className="w-full h-50 object-contain rounded-t-2xl group-hover:scale-110 transition duration-500"
                />
              ) : (
                <img
                  src={event.media}
                  alt={event.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              )}
            <div className="p-3 text-center">
              <h3 className="font-semibold text-md font-sans">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
