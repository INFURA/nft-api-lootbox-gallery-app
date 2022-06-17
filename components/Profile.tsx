import Image from 'next/image';

import styles from '../styles/modules/profile.module.css';
import MetaLogo from '../public/mm.png';

export interface ProfileProps {
  displayName: string;
  imageUrl: string | undefined;
  className?: string;
  onClick?: () => void;
}

const Profile = ({ displayName, imageUrl, className, onClick }: ProfileProps) => {
  console.log(imageUrl);
  
  return (
    <div
      className={styles.profile + ' ' + className}
      role="button"
      onClick={onClick}
    >
      <div className={styles.profile__info}>
        <p>{displayName}</p>
          <img className={styles.profile__img} src={MetaLogo.src} alt="" />
      </div>
      <div className={styles.profile__disconnect}>Disconnect Wallet</div>
    </div>
  );
};

export default Profile;
