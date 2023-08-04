import React, { useState, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/all";
import "./topScroll.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function TopScroll() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 60) {
      setVisible(true);
    } else if (scrolled <= 60) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="top-scroll">
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <IoMdArrowDropup />
      </button>
    </div>
  );
}
