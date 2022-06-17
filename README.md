
# NFT Gallery Project

__Goal:__ Display a gallery of all ETH NFTS in a users wallet

In this project the user will connect their MetaMask wallet. If they own any NFT's, they will connect to the site and be able to browse their collection

A real-world use case for this project: Displaying NFT's in a collection or for specific users in a dApp


## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Infura NFT API](https://docs.api.infura.io/nft/)
- Axios


## Run Locally

### 1. Intallation
Clone the project

```bash
  git clone https://github.com/INFURA/nft-api-lootbox-gallery-app.git
```

Go to the project directory

```bash
  cd nft-api-lootbox-gallery-app
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

You'll need to sign up and get an Infura API key:

  1 - [Create an Infura account](https://infura.io/) 
  
  2 - Create a new project and add `Project ID` + `Project Secret` to `.env.local` file. 

  3 - Optionally, overwrite the `ACCOUNT_ADDRESS` variable if you want to explore available NFTs on other wallet.
  
```bash
# .env.local
INFURA_PROJECT_ID=
INFURA_PROJECT_SECRET=
# Optional account address to overwrite Metamask selected account
ACCOUNT_ADDRESS=
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