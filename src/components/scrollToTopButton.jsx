import React, { useEffect, useState } from "react";
import { Icons } from "./Icons";
import "../assets/styles/global.scss";

const ScrollToTopButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <button className='main__button-scroll' onClick={scrollTop}>
          <Icons
            className='main__button-scroll_icon'
            name='arrow'
            color='#aa474c'
            size='60'
          />
        </button>
      )}
    </div>
  );
};

export { ScrollToTopButton };
