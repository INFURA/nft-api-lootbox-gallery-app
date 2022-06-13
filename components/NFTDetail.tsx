import styles from '../styles/modules/nft.module.css';

export interface NFTDetailProps {
  imgUrl: string;
  title: string;
  collection: string;
}

const NFTDetail = ({ imgUrl, title, collection }: NFTDetailProps) => {
  return (
    <div className={styles.nft}>
      <div className={styles.nft__content_wrapper}>
        <div className={styles.nft__content}>
          <img className={styles.nft__img} src={imgUrl} alt="" />
          <div className={styles.nft__meta}>
            <h1 className={styles.nft__title}>{title}</h1>
            <p className={styles.nft__collection}>{collection}</p>
          </div>
        </div>
      </div>
      <div
        className={styles.nft__bg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
};

export default NFTDetail;
