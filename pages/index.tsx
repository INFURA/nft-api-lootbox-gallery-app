import Head from 'next/head'

import Header from '../components/Header';
import Splash from '../components/Splash';
import Gallery from '../components/Gallery';

import { useState } from 'react';
import { useWallet } from '../hooks/useWallet';

const App = () => {
  const [showGallery, setShowGallery] = useState(false);
  const fadeTimeout = 400;

  const {
    displayName,
    errorMessage,
    handleConnectWallet,
    handleDisconnectWallet,
    setWalletConnected,
    successMessage,
    tokens,
    walletConnected,
    profileImage,
  } = useWallet(() => {
    setWalletConnected(true);
    setTimeout(() => {
      setShowGallery(true);
    }, fadeTimeout);
  }, () => {
    setShowGallery(false);
  });

  const handleDisconnect = () => {
    handleDisconnectWallet();
    setShowGallery(false);
  };

  return (
    <div className="App">
      <Head>
        <title>Infura NFT Gallery</title>
      </Head>
      <Header
        connected={walletConnected}
        displayName={displayName}
        imageUrl={profileImage}
        onClick={handleDisconnect}
      />
      {showGallery ? (
        <Gallery tokens={tokens} />
      ) : (
        <Splash
          title="Create an NFT Gallery"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                autem odio totam quibusdam nobis. Quis numquam laudantium fugiat
                fuga ullam. Dolore neque consectetur unde magni suscipit, incidunt
                porro dolorem id."
          buttonText="Connect Wallet"
          handleConnect={handleConnectWallet}
          walletConnected={walletConnected}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      )}
      <div id="modal-root" className="absolute top-0"></div>
    </div>
  );
};

export default App;
