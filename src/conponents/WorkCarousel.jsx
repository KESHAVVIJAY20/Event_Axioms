import Bg1 from "../assets/background1.jpg";
import Bg2 from "../assets/background2.jpg";
import vid1 from "../assets/video1.mp4";
import vid2 from "../assets/video2.mp4";
import BG3 from "../assets/bg01.jpg";
export default function EventMarquee() {
  const events = [
    {
      id: 1,
      title: "Wedding",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Concert",
      img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Corporate",
      img: "https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Birthday",
      img: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Festival",
      img: "https://media.istockphoto.com/id/2210689996/photo/a-man-and-woman-are-holding-a-bouquet-of-flowers.webp?a=1&b=1&s=612x612&w=0&k=20&c=NqQXNDrd3-2JSmTKBU1DDgny70xr2GIW60ksNMrSafE=",
    },
    {
      id: 6,
      title: "Festival",
      img: "https://media.istockphoto.com/id/2196118181/photo/bride-and-groom-husband-and-wife-close-up-of-wedding-rings.webp?a=1&b=1&s=612x612&w=0&k=20&c=FNM0FzXAV6jpfrELefPU7AuWXiCtNXjCEoplIknCbXc=",
    },
  ];

  return (
    <div>
      <div className="flex gap-6 animate-marquee">
        {/* Duplicate items for smooth loop */}
        {[...events, ...events].map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg cursor-pointer"
          >
            {/* <video
              src={event.vid}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
              className="h-40 w-full object-cover"
            /> */}
            <img
              src={event.img}
              alt={event.title}
              className="h-70 w-70 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3">
              <h3 className="font-semibold">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
