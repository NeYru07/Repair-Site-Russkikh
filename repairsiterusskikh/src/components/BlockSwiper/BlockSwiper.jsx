import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import Projects from '../swiper-projects/Projects';

export default function BlockSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      forWhat: "Квартира",
      discript: "32,3 м². Дизайнерский ремонт, отельная отделка",
      price: "234.000 ₽",
      png: "../public/images/project1.png"
    },
    {
      forWhat: "Квартира",
      discript: "127,7 м². Премиум ремонт, деревянная отделка",
      price: "1.324.000 ₽",
      png: "../public/images/project2.png"
    }
  ];

  return (
    <div className="blockSwiper-container">
      <Swiper
        className="blockSwiper"
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <SwiperSlide key={index}>
            <Projects {...projects[0]} />
            <Projects {...projects[1]} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-controls">
        <div className="custom-prev">←</div>
        <div className="page-counter">
          {activeIndex + 1}/4
        </div>
        <div className="custom-next">→</div>
      </div>
    </div>
  );
}