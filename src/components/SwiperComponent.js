// src/components/SwiperComponent.js
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Импортируйте стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Импортируйте модули Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules';



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
              <a data-fancybox="gallery" href="/images/1.jpg" >
                <img src="/images/1.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/2.jpg" >
                <img src="/images/2.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/3.jpg" >
                <img src="/images/3.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/4.jpg" >
                <img src="/images/4.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/5.jpg" >
                <img src="/images/5.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/6.jpg" >
                <img src="/images/6.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/7.jpg" >
                <img src="/images/7.jpg" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a data-fancybox="gallery" href="/images/8.jpg" >
                <img src="/images/8.jpg" />
              </a>
            </SwiperSlide>
         
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
