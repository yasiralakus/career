import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function CommentSliders() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        spaceBetween={15}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="home-comment-item">

                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae est voluptas sint blanditiis, odit beatae, rerum aperiam quis at dolores dolorem consectetur voluptatem ex laboriosam animi similique consequatur architecto?</h3>

                <img src="./img/home/comment01.jpg" alt="" />

                <h2>Ronald Wright</h2>
                <p>Admin of Hastech</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-comment-item">

                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae est voluptas sint blanditiis, odit beatae, rerum aperiam quis at dolores dolorem consectetur voluptatem ex laboriosam animi similique consequatur architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptas.</h3>

                <img src="./img/home/comment02.jpg" alt="" />

                <h2>Harold McCoy</h2>
                <p>CEO of Hastech</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-comment-item">

                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae est voluptas sint blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur consectetur esse aut pariatur quidem eos incidunt et cum officia accusantium voluptas possimus amet alias soluta, ipsa quibusdam suscipit assumenda.</h3>

                <img src="./img/home/comment03.jpg" alt="" />

                <h2>Sharon Harper</h2>
                <p>Marketer of Hastech</p>

            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
