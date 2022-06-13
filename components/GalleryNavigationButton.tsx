import styles from '../styles/modules/gallery.module.css';

const GalleryNavigationButton = ({
  onClick,
  children,
  disabled,
  className = '',
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={styles.navigation__button + ' ' + className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GalleryNavigationButton;