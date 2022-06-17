import styles from '../styles/modules/gallery.module.css';

import Image from 'next/image'
import Modal from './Modal';
import NFTDetail from './NFTDetail';
import { useEffect, useState } from 'react';

export interface GallerySlideProps {
  imgUrl: string;
  title: string;
  collection: string;
  active: boolean;
}

const GallerySlide = ({
  imgUrl,
  title,
  collection,
  active,
}: GallerySlideProps) => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(imgUrl);

  useEffect(() => {
    if (!active) {
      setShowModal(false);
    }
  }, [active]);

  const getSlideClasses = () => {
    if (active) {
      return styles.gallery__slide_active;
    }
  };

  const handleSlideClick = () => {
    if (active) {
      setShowModal(!showModal);
    }
  };

  return (
    <div
      className={styles.gallery__slide + ' ' + getSlideClasses()}
      onClick={handleSlideClick}
    >
      {imgUrl ? (
        <img src={src} onError={() => setSrc('/image-error.png')}   alt={title} />
      ) : (
        <div className={styles.gallery__slide__placeholder} />
      )}
      <div
        className={
          (active ? 'opacity-[1] ' : 'opacity-0 ') + styles.gallery__slide_meta
        }
      >
        <h1 className={styles.gallery__slide_title}>{title}</h1>
        <p className={styles.gallery__slide_collection}>{collection}</p>
      </div>
      {active && showModal && (
        <Modal>
          <NFTDetail imgUrl={imgUrl} title={title} collection={collection} />
        </Modal>
      )}
    </div>
  );
};

export default GallerySlide;
