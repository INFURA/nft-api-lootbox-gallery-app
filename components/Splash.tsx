import Image from 'next/image';

import PrimaryButton from './PrimaryButton';

import NFTExampleImage from '../public/nft_example.png';
import styles from '../styles/modules/splash.module.css';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

export interface SplashProps {
  buttonText: string;
  description: string;
  errorMessage?: string;
  handleConnect: () => void;
  successMessage?: string;
  title: string;
  walletConnected: boolean;
}

const Splash = ({
  buttonText,
  description,
  errorMessage,
  handleConnect,
  successMessage,
  title,
  walletConnected,
}: SplashProps) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage] = useState('Connecting to wallet');

  useEffect(() => {
    if (errorMessage?.length) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [errorMessage, setLoading]);

  useEffect(() => {
    if (successMessage?.length && !loading) {
      setLoading(true);
    }
  }, [successMessage, setLoading]);

  const splashClasses = () => {
    return (
      styles.splash__container +
      ' ' +
      (walletConnected ? styles.splash__container_fadeout : '')
    );
  };

  const onClick = () => {
    setLoading(true);
    handleConnect();
  };

  return (
    <section className={splashClasses()}>
      <div className={styles.splash__content}>
        <div>
          <h1 className={styles.splash__heading}>{title}</h1>
          <p className={styles.splash__description}>{description}</p>
          {loading ? (
            <div className={styles.splash__message_container}>
              <p>
                {errorMessage?.length ? (
                  <span className={styles.splash__error}>{errorMessage}</span>
                ) : successMessage?.length ? (
                  <span className={styles.splash__success}>
                    {successMessage}
                  </span>
                ) : (
                  <span>{`${loadingMessage}...`}</span>
                )}
              </p>
              {!errorMessage && (
                <Spinner type={(successMessage && 'success') || 'default'} />
              )}
            </div>
          ) : (
            <PrimaryButton onClick={onClick} className={styles.splash__btn}>
              {buttonText}
            </PrimaryButton>
          )}
        </div>
        <div>
          <Image
            className={styles.splash__nft_example}
            src={NFTExampleImage}
            alt=""
            role="presentation"
          />
        </div>
      </div>
    </section>
  );
};

export default Splash;
