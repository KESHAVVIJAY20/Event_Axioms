import React, { useState } from "react";
import Header from "../conponents/Header";
import bgdesign from "../assets/bgdesign.jpg";
import Footer from "../conponents/Footer";
import VideoCarousel from "../conponents/VideoCarousel";
import WorkCarousel from "../conponents/WorkCarousel";
import ClientReview from "../conponents/ClientReview";
import AOS from "aos";
import "aos/dist/aos.css";
import EnquiryModal from "../conponents/EnquiryModal";
import { useEffect } from "react";
import {
  FaCheck,
  FaGift,
  FaMessage,
  FaPerson,
  FaRightLeft,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import WhoWeAre from "../conponents/WhoWeAre";
import WhyChooseUs from "../conponents/WhyChooseUs";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
    });
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <div
      // style={{ backgroundImage: `url(${Bg})` }}
      className="overflow-hidden"
    >
      <Header/>
      <VideoCarousel />
      <WhoWeAre />
      <div
        className="flex relative  md:min-h-120 min-h-150
       flex-col gap-10 md:mb-0 pt-10 mb-20 md:pb-0 pb-40 bg-purple-50 bg-opacity-50 rounded-2xl shadow-lg w-full mask-[linear-gradient(to_top,transparent_0%,black_10%)]"
      >
        <div className="bg-purple-50 absolute max-h-100 bg-opacity-50 rounded-2xl w-full md:pt-0 pt-10 space-y-10 px-5">
          <h1
            data-aos="fade-up"
            className="text-center text-purple-900 font-serif text-5xl"
          >
            Our Core Services
          </h1>
          <div className="md:flex justify-center items-center gap-5 flex-wrap md:space-y-0 space-y-5 md:mb-0 mb-20 md:pb-0 pb-20">
            <div
              data-aos="zoom-in"
              className="group relative cursor-pointer flex flex-col justify-center items-center text-center shadow-sm bg-white p-10 rounded-2xl border-2 border-pink-200 hover:border-pink-600 transition-transform duration-300 hover:-translate-y-2 w-full md:w-80"
            >
              <p className="text-xl">Weddings & Social Celebrations</p>

              {/* Hover Box */}
              <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-120 bg-white text-pink-500 p-5 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <p className="text-sm">
                  "Your big day deserves nothing short of perfection. Recognized
                  as the top wedding planners in Kota Rajasthan, we curate
                  bespoke wedding experiences that reflect your unique story.
                  Whether you are planning an intimate hometown ceremony or a
                  grand royal affair, our expertise as luxury destination
                  wedding planners Rajasthan guarantees a spectacular,
                  stress-free celebration."
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="group relative cursor-pointer flex flex-col justify-center items-center text-center shadow-sm bg-white p-10 rounded-2xl border-2 border-pink-200 hover:border-pink-600 transition-transform duration-300 hover:-translate-y-2 w-full md:w-80"
            >
              <p className="text-xl">​Corporate Events & Conferences</p>

              {/* Hover Box */}
              <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-120 bg-white text-pink-500 p-5 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <p className="text-sm">
                  "Elevate your brand with professionally managed corporate
                  gatherings. As the leading corporate event organizers Kota, we
                  specialize in product launches, annual days, seminars, dealer
                  meets, and team-building retreats. We manage the logistics,
                  audio-visuals, and scheduling so you can focus on your
                  business objectives."
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="group relative cursor-pointer flex flex-col justify-center items-center text-center shadow-sm bg-white p-10 rounded-2xl border-2 border-pink-200 hover:border-pink-600 transition-transform duration-300 hover:-translate-y-2 w-full md:w-80"
            >
              <p className="text-xl">​Event Decor & Seamless Coordination</p>

              {/* Hover Box */}
              <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-120 bg-white text-pink-500 p-5 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <p className="text-sm">
                  "The magic is always in the details. Our talented event
                  coordinators and decorators in Kota work tirelessly to design
                  breathtaking floral arrangements, innovative lighting setups,
                  and custom stage fabrications. We ensure that the aesthetic of
                  your event perfectly matches its purpose, leaving a lasting
                  impression on every guest."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
      // style={{
      //   backgroundImage: `url(${"https://www.theweddingcompany.com/images/HomePage/new/pink-curve.svg"})`,
      // }}
      // className=" bg-contain bg-no-repeat flex items-center justify-center flex-col gap-10 pb-20 mask-[linear-gradient(to_bottom,transparent_0%,black_20%)]"
      >
        <section className="w-full bg-pink-50 py-20 mask-[linear-gradient(to_bottom,transparent_0%,black_10%)]">
          <h1 className="text-center text-5xl mb-20">Moments Gallery</h1>
          <WorkCarousel />
        </section>
      </div>
      <WhyChooseUs />
      <ClientReview />

      <div className="flex-col flex justify-center items-center my-20">
        <div className="flex flex-col justify-center items-center text-center gap-2 mb-10">
          <p data-aos="fade-left" className="text-5xl">
            How it Works ?
          </p>
          <span data-aos="fade-right" className="text-md">
            5 easy steps for a hassle-free wedding
          </span>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap text-center">
          <div className="flex justify-center flex-col items-center w-50 gap-10">
            <div
              data-aos="fade-up"
              className="flex justify-center w-30 h-30 p-10 items-center bg-white shadow-lg rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            >
              <FaMessage className="text-3xl text-pink-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="ml-2 text-lg text-gray-700">
                Talk to Our Wedding Expert
              </span>
              <span className="text-sm text-gray-500">
                Discuss your vision and preferences with our expert.
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center w-50 gap-10">
            <div
              data-aos="fade-down"
              className="flex justify-center w-30 h-30 p-10 items-center bg-white shadow-lg rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            >
              <FaRightLeft className="text-3xl text-pink-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="ml-2 text-lg text-gray-700">
                Explain Your Requirements
              </span>
              <span className="text-sm text-gray-500">
                Discuss everything in detail
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center  w-50 gap-10">
            <div
              data-aos="fade-up"
              className="flex justify-center w-30 h-30 p-10 items-center bg-white shadow-lg rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            >
              <FaGift className="text-3xl text-pink-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="ml-2 text-lg text-gray-700">
                Get Custom Package
              </span>
              <span className="text-sm text-gray-500">
                Our experts will give you a tailor-made package based on your
                requirement{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-50 gap-10">
            <div
              data-aos="fade-down"
              className="flex justify-center w-30 h-30 p-10 items-center bg-white shadow-lg rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            >
              <FaCheck className="text-3xl text-pink-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="ml-2 text-lg text-gray-700">
                Book Your Wedding
              </span>
              <span className="text-sm text-gray-500">
                Give us a small booking amount to confirm once you are
                satisfied{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-50 gap-10">
            <div
              data-aos="fade-up"
              className="flex justify-center w-30 h-30 p-10 items-center bg-white shadow-lg rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-300"
            >
              <FaPerson className="text-3xl text-pink-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="ml-2 text-lg text-gray-700">
                Make Memorable Forever{" "}
              </span>
              <span className="text-sm text-gray-500">
                Enjoy happy moments at home with your family & friends while we
                are planning your Big Day{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-20 flex flex-col justify-center items-center gap-5">
        <p className="text-4xl font-semibold w-3/4">
          Your one-stop solution for <span className="text-6xl">Events</span>{" "}
          <br /> From <span className="text-6xl">Planning to Execution</span>
        </p>
        <Link to="/contact">
          <p className="bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-bold py-3 px-4 rounded mt-5 transition-colors duration-300">
            Get Started
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
