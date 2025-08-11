import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import slide1 from '../assets/k1.png'
import slide2 from '../assets/k1.png'
import slide3 from '../assets/k1.png'

export default function MySlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={slide1.src} alt="Csillagos égbolt" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={slide2.src} alt="Galaxis" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={slide3.src} alt="Hold felszíne" />
      </div>
    </div>
  )
}