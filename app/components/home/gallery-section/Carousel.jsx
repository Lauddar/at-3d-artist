import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import CarouselItem from './CarouselItem'

export default function Carousel({ projects, onProjectSelect }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 5,
      spaceBetween: '2%',
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        1024: {
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
    <div className="carousel-container relative">
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
          <svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="47.6012" height="5.49244" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 37.5428 64.1162)" fill="#143F6B" />
            <rect width="31.1239" height="5.49244" transform="matrix(-0.707107 0.707107 0.707107 0.707107 33.6591 0)" fill="#143F6B" />
          </svg>
        </div>
        <swiper-container init="false" ref={swiperRef} navigation="true" loop="true">
          {projects.map((project, index) => (
            <swiper-slide key={index}>
              <CarouselItem key={project.id} projectSrc={project.src} alt={project.title} onClick={() => onProjectSelect(project.id)} />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
          <svg width="38" height="68" viewBox="0 0 38 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.000244141" y="64.1162" width="47.6012" height="5.49244" transform="rotate(-45 0.000244141 64.1162)" fill="#143F6B" />
            <rect x="3.88379" width="31.1239" height="5.49244" transform="rotate(45 3.88379 0)" fill="#143F6B" />
          </svg>
        </div>

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    </div>
  );
}
