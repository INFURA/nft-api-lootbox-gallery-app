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
          description="This project is a baseline starting point for your project. Enter your wallet address 
          in the 'ACCOUNT_ADDRESS' field of your .env file to test out the project. After you are able to successfully
          display your NFTs in the gallery it's your turn to extend this project. Imagine other creative use-cases for
          this project leveraging the Infura NFT-API and build out your vision!"
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
