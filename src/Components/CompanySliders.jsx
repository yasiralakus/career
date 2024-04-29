import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { supabase } from '../App';

export default function CompanySliders() {

    const [companyData, setCompanyData] = useState(null)

    useEffect(() => {
        async function fetchData() {

            let { data: companies, error } = await supabase
            .from('companies')
            .select('*')
            setCompanyData(companies ? companies : null)
        }
        fetchData()
    }, [])

  return (
    <>
      <Swiper
        slidesPerView={6}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        spaceBetween={15}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {companyData && companyData.map(x => (
            <SwiperSlide>
                <Link className='slider-company-item'>
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
