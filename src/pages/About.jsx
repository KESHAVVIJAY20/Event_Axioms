import React, { useEffect } from "react";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import WelcomeModal from "../conponents/WelcomeModal";
import owner from "../assets/AnujVj1.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true, // animation happens only once
      });
    }, []);
  const whyChoose = [
    {
      id: 1,
      title: "💎 Best Value",
      description:
        "Premium services with curated deals tailored to your needs.",
    },
    {
      id: 2,
      title: "🎯 Expert Planning",
      description: "Personalized ideas designed around your vision and budget.",
    },
    {
      id: 3,
      title: "🌿 Stress-Free",
      description: "We manage everything so you can enjoy every moment.",
    },
    {
      id: 4,
      title: "🚀 Memorable",
      description: "Creating experiences that leave lasting impressions.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row justify-between items-center min-h-screen gap-2 p-10">
        <div className="flex flex-col justify-center items-center gap-2 p-10 md:w-1/2 text-center">
          <img
          data-aos="zoom-out"
            src={owner}
            alt="Owner"
            className="md:w-auto md:h-70  
            mask-[linear-gradient(to_top,transparent_0%,black_20%)] 
            drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:scale-120 transition duration-300 "
          />
          <span className="text-3xl font-sans font-bold">
            Anuj Kumar Vijayvergiya
          </span>
          <i>~ Founder & CEO @ Event Axiom</i>
        </div>
        <div className="flex flex-col md:w-1/2 gap-5">
          <p className="text-3xl font-serif">
            {" "}
            <span className="font-bold font-serif text-5xl">
              Event Axiom{" "}
            </span>{" "}
            — “the principle behind unforgettable events.”
          </p>
          <span>
            Discover Weddings by Anuj, your go-to Kota event planner with a
            global touch, powered by Event Axiom! As expert wedding planners, we
            create magical luxury weddings and breathtaking destination weddings
            that leave lasting memories. From joyful birthday party planning to
            heartfelt anniversary planning and dynamic corporate events, we
            handle every detail with care. Our event decor services add sparkle
            to your celebrations, and we help you choose the perfect wedding
            venues for your big day. With global event planning and top-notch
            event management, Weddings by Anuj ensures your special moments are
            unforgettable. Let us bring your vision to life, anywhere in the
            world!
          </span>
        </div>
      </div>
      <div className="py-10 bg-gray-50 text-center">
        <div className="py-10 bg-gray-50 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            ✨ Why Choose Event Axiom?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
            {whyChoose.map((item) => (
              <div
              data-aos="fade-up"
                key={item.id}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
