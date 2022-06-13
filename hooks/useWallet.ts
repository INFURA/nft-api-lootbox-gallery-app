import axios from 'axios';
import { useEffect, useState } from 'react';

type WalletConnectCallback = () => void;

export const useWallet = (
  onConnect?: WalletConnectCallback,
  onDisconnect?: WalletConnectCallback
) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [displayName, setDisplayName] = useState<string>();
  const [profileImage, setProfileImage] = useState<string>();
  const [tokens, setTokens] = useState([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const reset = () => {
    setTokens([]);
    setDisplayName('');
    setWalletConnected(false);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const getTokens = async (accountAddress: string) => {
    try {
      const { data } = await axios.post('/api/assets', { accountAddress });
      return data.assets;
    } catch (error) {
      setTimeout(() => {
        setErrorMessage('Error getting tokens');
      }, 2000);
      return;
    }
  };

  const handleConnectWalletError = (error: any) => {
    setErrorMessage(error.message);

    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };

  const handleConnectWallet = async (connected: boolean = false) => {
    const { ethereum } = window;
    let eth;

    if (typeof ethereum !== 'undefined') {
      try {
        if (!connected) {
          try {
            await ethereum.request({
              method: 'wallet_requestPermissions',
              params: [
                {
                  eth_accounts: {},
                },
              ],
            });
          } catch (error) {
            throw error;
          }
        }

        ethereum.on('accountsChanged', async (accounts: any) => {
          reset();
          onDisconnect();
        });
      } catch (error) {
        handleConnectWalletError(error);
        return;
      }

      try {
        eth = await ethereum.request({
          method: 'eth_requestAccounts',
        });
      } catch (error) {
        handleConnectWalletError(error);
        return;
      }

      setSuccessMessage('Connected to wallet');

      const [accountAddress] = eth;

      setSuccessMessage('Fetching tokens...');

      let tokens = await getTokens(accountAddress);

      if (!tokens?.length) return;

      setDisplayName(tokens[0].owner.user.username);
      setProfileImage(String(tokens[0].owner.profile_img_url));

      tokens = tokens.map(token => {
        return {
          name: token.name,
          imageUrl: token.image_url,
          collection: token.collection.name,
          id: token.token_id,
        }
      });

      setTokens(tokens);
    }

    onConnect();
  };

  const handleDisconnectWallet = () => {
    reset();
  };

  const checkMetamaskConnected = async () => {
    const { ethereum } = window;

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    return accounts && accounts.length > 0;
  };

  useEffect(() => {
    checkMetamaskConnected().then((connected) => {
      if (connected) {
        handleConnectWallet(connected);
      }
    });
  }, []);

  return {
    displayName,
    errorMessage,
    getTokens,
    profileImage,
    handleConnectWallet,
    handleDisconnectWallet,
    setWalletConnected,
    successMessage,
    tokens,
    walletConnected,
  };
};
