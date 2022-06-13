import styles from '../styles/modules/button.module.css';

const PrimaryButton = ({ onClick, children, className = '' }: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button className={styles.primary + ' ' + className} onClick={onClick}>
      { children } {'>'}
    </button>
  );
};

export default PrimaryButton;