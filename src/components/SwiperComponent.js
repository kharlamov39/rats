// src/components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Импортируйте стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Импортируйте модули Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';



const SwiperComponent = () => {
  return (
    <div className="swiper-container main">
        <h1>Булочки</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]} // Укажите модули
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView:2,
            },
            639: {
              slidesPerView: 3,
            },
            865:{
              slidesPerView:4
            },
            1000:{
              slidesPerView:5
            }
          }}
      >
        <div>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img1} >
                <img src={img1} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img2} >
                <img src={img2} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img3} >
                <img src={img3} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img4} >
                <img src={img4} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img5} >
                <img src={img5} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img6} >
                <img src={img6} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img7} >
                <img src={img7} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href={img8} >
                <img src={img8} />
              </a>
            </SwiperSlide>
         
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
