import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Projects from '../swiper-projects/Projects';
import './CustomSwiper.css';

export default function CustomSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <SwiperSlide key={1}>
      <Projects
        forWhat="Квартира"
        discript="32,3 м². Дизайнерский ремонт, отельная отделка"
        price="234.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Квартира"
        discript="127,7 м². Премиум ремонт, деревянная отделка"
        price="1.324.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    <SwiperSlide key={2}>
      <Projects
        forWhat="Квартира"
        discript="45 м². Капитальный ремонт"
        price="310.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Офис"
        discript="80 м². Офисный ремонт"
        price="890.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    <SwiperSlide key={3}>
      <Projects
        forWhat="Квартира"
        discript="32,3 м². Дизайнерский ремонт, отельная отделка"
        price="234.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Квартира"
        discript="127,7 м². Премиум ремонт, деревянная отделка"
        price="1.324.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    <SwiperSlide key={4}>
      <Projects
        forWhat="Квартира"
        discript="45 м². Капитальный ремонт"
        price="310.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Офис"
        discript="80 м². Офисный ремонт"
        price="890.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    <SwiperSlide key={5}>
      <Projects
        forWhat="Квартира"
        discript="32,3 м². Дизайнерский ремонт, отельная отделка"
        price="234.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Квартира"
        discript="127,7 м². Премиум ремонт, деревянная отделка"
        price="1.324.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    <SwiperSlide key={6}>
      <Projects
        forWhat="Квартира"
        discript="45 м². Капитальный ремонт"
        price="310.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project1.png`}
      />
      <Projects
        forWhat="Офис"
        discript="80 м². Офисный ремонт"
        price="890.000 ₽"
        png={`${process.env.PUBLIC_URL}/images/project2.png`}
      />
    </SwiperSlide>,
    
  ];

  return (
    <div className="custom-swiper-container">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides}

        <div className="custom-navigation">
          <button className="custom-prev">
            <span>Пред.</span>
          </button>
          
          <div className="page-counter">
            {activeIndex + 1}
          </div>
          
          <button className="custom-next">
            <span>След.</span>
          </button>
        </div>
      </Swiper>
    </div>
  );
}