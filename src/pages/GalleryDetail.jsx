import { useNavigate, useParams } from "react-router-dom";
import Header from "../conponents/Header";
import { events } from "../data/Events";

export default function GalleryDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));
  const moreEvents = events.filter((e) => e.id !== Number(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <Header />

      <div className="p-10">
        {/* Title */}
        <h1 className="text-4xl mb-5">{event.title}</h1>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {event.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="event"
              className="w-full h-45 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* More Events */}
        <h2 className="text-2xl mb-5">More Events</h2>

        <div className="flex gap-15 flex-wrap">
          {moreEvents.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/gallery/${item.id}`)}
              className="cursor-pointer bg-white shadow p-5 rounded-xl md:w-60 w-full hover:scale-105 transition"
            >
              <video
                src={item.media}
                autoPlay
                loop
                muted
                className="w-full h-50 object-cover rounded-t-2xl group-hover:scale-110 transition duration-500"
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
