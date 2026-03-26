import React from "react";
import Header from "../conponents/Header";
import Bg from "../assets/bg.jpg";
import Footer from "../conponents/Footer";
import VideoCarousel from "../conponents/VideoCarousel";
export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className=" bg-cover bg-center h-screen"
    >
      <Header />
      Home
      <VideoCarousel/>
      <Footer/>
    </div>
  );
}
