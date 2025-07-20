import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function NavigationSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="/images/cs1.png" alt="Kép 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/cs2.png" alt="Kép 2" />
      </SwiperSlide>
    </Swiper>
  );
}

