import InfuraLogo from './InfuraLogo';
import Profile from './Profile';

import styles from '../styles/modules/header.module.css';

export interface HeaderProps {
  connected: boolean;
  displayName: string;
  imageUrl: string;
  onClick: () => void;
}

const Header = ({ connected, displayName, imageUrl, onClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <InfuraLogo className={styles.header__logo} />
      {connected && (
        <Profile
          className={styles.header__profile}
          displayName={displayName}
          imageUrl={imageUrl}
          onClick={onClick}
        />
      )}
    </header>
  );
};

export default Header;
