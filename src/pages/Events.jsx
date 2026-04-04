import React, { useState } from "react";
import Header from "../conponents/Header";
import Footer from "../conponents/Footer";
import WelcomeModal from "../conponents/WelcomeModal";

export default function Events() {
    const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Header />
      this is event page
      <Footer/>
    </div>
  );
}
