import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './css/Carousel.css'; // Ensure your CSS is imported

const Carousel: React.FC = () => {
    return (
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img src="/images/1715661103674.jpg" alt="Slide 1" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/nolan starlight.jpg" alt="Slide 2" className="carousel-image" />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      </div>
    );
  };
  
  export default Carousel;