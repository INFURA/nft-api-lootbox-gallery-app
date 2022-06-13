import { useSwiper } from 'swiper/react';

import Caret from './Caret';
import GalleryNavigationButton from './GalleryNavigationButton';
import styles from '../styles/modules/gallery.module.css';

const GalleryNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.navigation}>
      <GalleryNavigationButton
        onClick={() => swiper.slidePrev()}
        disabled={swiper.activeIndex === 0}
      >
        <Caret className="rotate-180"/>
      </GalleryNavigationButton>
      <GalleryNavigationButton
        onClick={() => swiper.slideNext()}
        className="ml-10"
        disabled={swiper.activeIndex + 1 === swiper.slides.length}
      >
        <Caret />
      </GalleryNavigationButton>
    </div>
  );
};

export default GalleryNavigation;
