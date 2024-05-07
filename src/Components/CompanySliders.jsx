import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function CompanySliders() {

    const companies = [
        {
            company_id: 1,
            company_logo: './img/home/company01.png',
            company_name: 'Envato',
            company_location: 'Melbourne / Australia',
        },

        {
            company_id: 2,
            company_logo: './img/home/company02.png',
            company_name: 'Astha',
            company_location: 'Dhaka / Bangladesh',
        },

        {
            company_id: 3,
            company_logo: './img/home/company03.png',
            company_name: 'Github',
            company_location: 'San Francisco / USA',
        },

        {
            company_id: 4,
            company_logo: './img/home/company04.png',
            company_name: 'Medicore',
            company_location: 'Los Angeles / USA',
        },

        {
            company_id: 5,
            company_logo: './img/home/company05.png',
            company_name: 'Greensoul',
            company_location: 'Tokyo / Japan',
        },

        {
            company_id: 6,
            company_logo: './img/home/company10.png',
            company_name: 'Bebsha',
            company_location: 'Coimbra / Portugal',
        },

        {
            company_id: 7,
            company_logo: './img/home/company07.png',
            company_name: 'Buzco',
            company_location: 'Dubai / UAE',
        },

        {
            company_id: 8,
            company_logo: './img/home/company12.png',
            company_name: 'Donna',
            company_location: 'Liverpool / UK',
        },

        {
            company_id: 9,
            company_logo: './img/home/company11.png',
            company_name: 'Fnions',
            company_location: 'Madrid / Spain',
        },

        {
            company_id: 10,
            company_logo: './img/home/company06.png',
            company_name: 'Generous',
            company_location: 'Osaka / Japan',
        },

        {
            company_id: 11,
            company_logo: './img/home/company09.png',
            company_name: 'Hope',
            company_location: 'Ottawa / Canada',
        },

        {
            company_id: 12,
            company_logo: './img/home/company08.png',
            company_name: 'Salina',
            company_location: 'Cambridge / UK',
        },

        {
            company_id: 13,
            company_logo: './img/home/company01.png',
            company_name: 'Envato',
            company_location: 'Melbourne / Australia',
        },

        {
            company_id: 14,
            company_logo: './img/home/company02.png',
            company_name: 'Astha',
            company_location: 'Dhaka / Bangladesh',
        },

        {
            company_id: 15,
            company_logo: './img/home/company03.png',
            company_name: 'Github',
            company_location: 'San Francisco / USA',
        },

        {
            company_id: 16,
            company_logo: './img/home/company04.png',
            company_name: 'Medicore',
            company_location: 'Los Angeles / USA',
        },

        {
            company_id: 17,
            company_logo: './img/home/company05.png',
            company_name: 'Greensoul',
            company_location: 'Tokyo / Japan',
        },

        {
            company_id: 18,
            company_logo: './img/home/company10.png',
            company_name: 'Bebsha',
            company_location: 'Coimbra / Portugal',
        },

        {
            company_id: 19,
            company_logo: './img/home/company07.png',
            company_name: 'Buzco',
            company_location: 'Dubai / UAE',
        },

        {
            company_id: 20,
            company_logo: './img/home/company12.png',
            company_name: 'Donna',
            company_location: 'Liverpool / UK',
        },

        {
            company_id: 21,
            company_logo: './img/home/company11.png',
            company_name: 'Fnions',
            company_location: 'Madrid / Spain',
        },

        {
            company_id: 22,
            company_logo: './img/home/company06.png',
            company_name: 'Generous',
            company_location: 'Osaka / Japan',
        },

        {
            company_id: 23,
            company_logo: './img/home/company09.png',
            company_name: 'Hope',
            company_location: 'Ottawa / Canada',
        },

        {
            company_id: 24,
            company_logo: './img/home/company08.png',
            company_name: 'Salina',
            company_location: 'Cambridge / UK',
        },
    ]

  return (
    <>
      <Swiper
        slidesPerView={6}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            900: {
                slidesPerView: 6,
            },
            800: {
                slidesPerView: 5,
            },
            700: {
                slidesPerView: 4,
            },
            600: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 2,
            },
          }}
        spaceBetween={15}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
            {companies.map(x => (
                <SwiperSlide key={x.company_id}>
                    <Link key={x.company_id} to={'/company-details'} className='slider-company-item'>
                        <img src={x.company_logo} alt="" />
                        <h1>{x.company_name}</h1>
                        <p>2 aktif iş ilanı</p>
                    </Link>
                </SwiperSlide>
            ))}

      </Swiper>
    </>
  );
}
