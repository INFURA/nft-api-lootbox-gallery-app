import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { visitFunctionBody } from 'typescript';

export interface Asset {
  name: string;
  image_url: string;
  token_id: string;
  collection: {
    name: string;
  };
}

interface Data {
  assets: Asset[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== 'POST') {
    res.status(405).json(new Error('Only POST requests allowed'));
    return;
  }

  const accountAddress = process.env.ACCOUNT_ADDRESS ? process.env.ACCOUNT_ADDRESS : req.body.accountAddress;

  try {
    const { data } = await axios.get(
      `https://nft.api.infura.io/networks/1/accounts/${accountAddress}/assets/nfts`,
      {
        headers: {},
        auth: {
          username: `${process.env.INFURA_PROJECT_ID}`,
          password: `${process.env.INFURA_PROJECT_SECRET}`
        }
      }
    );

    return res.status(200).json({
      assets: data.assets,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
