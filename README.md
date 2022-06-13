
# NFT Gallery Project

__Goal:__ Display a gallery of all ETH NFTS in a users wallet

In this project the user will connect their MetaMask wallet. If they own any NFT's, they will connect to the site and be able to browse their collection

A real-world use case for this project: Displaying NFT's in a collection or for specific users in a dApp


## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Etherscan API](https://docs.etherscan.io/)
- [OpenSea API](https://docs.opensea.io/reference/api-overview)
- Axios


## Run Locally

### 1. Intallation
Clone the project

```bash
  git clone https://github.com/mondorobot/consensys.nft-gallery.git
```

Go to the project directory

```bash
  cd consensys.nft-gallery
```

Install dependencies

```bash
  yarn
```

### 2. Environment Variables
Create environment variables file
```bash
  cp .env .env.local
```

You'll need to sign up and get an etherscan.io API key:

  1 - [Create an Etherscan account](https://docs.etherscan.io/getting-started/creating-an-account) 
  
  2 - [Get an API Key](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics)

Add your API Key to the `.env.local` file
```bash
  # .env.local

  ETHERSCAN_KEY=insert-your-api-key-here
```

Add the NFT contract address that you want to authenticate users with. Note that because this project utilizes the Etherscan API the contract used to verify users must be on the __ethereum network__.
```bash
  # .env.local

  ETHERSCAN_KEY=insert-your-api-key-here
```

### 3. Run the Project

```bash
  yarn dev
```
Go to http://localhost:3000


## Major Component Breakdown

`pages/index.tsx`
  - Home page Component

`hooks/useWallet.ts`
  - Wallet Hook

`pages/api/assets.ts`
  - Next.js API file