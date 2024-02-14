import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import CarouselItem from './CarouselItem'

export default function Carousel({ images }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 8,
      spaceBetween: '2%',
      navigation: {
        spaceBetween: '20px',
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <swiper-container init="false" ref={swiperRef} navigation="true" loop="true">
        {images.map((image, index) => (
          <swiper-slide key={index}>
            <CarouselItem imageSrc={image.src} caption={image.caption} />
          </swiper-slide>
        ))}
      </swiper-container>


      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    </>
  );
}
