import "./Projects.css"
import Line from "../Line/Line"
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects({ forWhat, discript, price, png }) {
  return(
	 <div className="projectBlock">
		<Line className="topLine" />
		<div className="inline-block">
			<div className="textBlock">
				<span>
				  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					 <path d="M9 0L18 9L9 18L0 9L9 0Z" fill="#0A0A0A"/>
				  </svg>
				  <p>{forWhat}</p>
				</span>
				<h2>{discript}</h2>
				<p className="price">{price}</p>
			</div>
			<Swiper className="Swiper"
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					loop={true}
					pagination={{ clickable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log('slide change')}
				 >
					<SwiperSlide><img src={png} alt="" /></SwiperSlide>
					<SwiperSlide><img src={png} alt="" /></SwiperSlide>
					<SwiperSlide><img src={png} alt="" /></SwiperSlide>
					<SwiperSlide><img src={png} alt="" /></SwiperSlide>
			</Swiper>
		</div>
		<Line className="LineBottom" />
	 </div>
  )
}