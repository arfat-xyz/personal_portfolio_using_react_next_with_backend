import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import HideComponent from "./ExtraComponent/HideComponent";
const BringTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [animateBtn, setAnimateBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
        setAnimateBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    setAnimateBtn(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bringTop">
      <HideComponent />
      {showTopBtn && (
        <a
          onClick={goToTop}
          className={`bringTopAttribute ${animateBtn && "animateBtn"}`}
        >
          <AiOutlineArrowUp />
        </a>
      )}
    </div>
  );
};

export default BringTop;
