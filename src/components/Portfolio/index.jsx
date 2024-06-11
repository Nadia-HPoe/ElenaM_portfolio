import React from "react";
import { forwardRef } from "react";
import { portfolio } from "./portfolio";
import { PortfolioItem } from "./PortfolioItem";
import "../AboutMe/aboutme.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";

const Portfolio = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='portfolio__container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <hr className='aboutme__title-line' />
      <div className='portfolio__wrapper'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#aa474c",
            "--swiper-pagination-color": "#aa474c",
          }}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={90}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
        >
          <SwiperSlide>
            {portfolio.slice(0, 2).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                name={item.name}
                text={item.text}
                link={item.link}
              />
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {portfolio.slice(2, 4).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                name={item.name}
                text={item.text}
                link={item.link}
              />
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {portfolio.slice(4, 6).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                name={item.name}
                text={item.text}
                link={item.link}
              />
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {portfolio.slice(6, 8).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                name={item.name}
                text={item.text}
                link={item.link}
              />
            ))}
          </SwiperSlide>
          <SwiperSlide>
            {portfolio.slice(8, 10).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                name={item.name}
                text={item.text}
                link={item.link}
              />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
});

export { Portfolio };
