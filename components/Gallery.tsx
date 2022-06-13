import { useState } from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import GalleryNavigation from './GalleryNavigation';
import GallerySlide from './GallerySlide';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from '../styles/modules/gallery.module.css';

interface token {
  name: string;
  collection: string;
  id: string;
  imageUrl: string;
}

const Gallery = ({ tokens }: { tokens: token[] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperConfig: SwiperProps = {
    className: '',
    modules: [Navigation, A11y],
    spaceBetween: 25,
    slidesPerView: 1,
    slidesOffsetBefore: window.innerWidth / 4,
    centeredSlides: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    onSlideChange: (swiper) => setActiveSlide(swiper.activeIndex),
    onSwiper: (swiper) => console.log(swiper),
    breakpoints: {
      1080: {
        slidesPerView: 1.5,
        slidesOffsetBefore: 50,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1920: {
        slidesPerView: 3.5,
        slidesOffsetBefore: 150,
      },
      2560: {
        slidesPerView: 3.5,
        slidesOffsetBefore: 100,
      }
    }
  };

  return (
    <section className={styles.gallery}>
      <Swiper {...swiperConfig}>
        {tokens.map((slide, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <GallerySlide
              imgUrl={slide.imageUrl}
              title={slide.name}
              collection={slide.collection}
              active={i === activeSlide}
            />
          </SwiperSlide>
        ))}
        <GalleryNavigation />
      </Swiper>
    </section>
  );
};

export default Gallery;
