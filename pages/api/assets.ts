import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

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

  const { accountAddress } = req.body;

  try {
    const { data } = await axios.get(
      `https://api.opensea.io/api/v1/assets`,
      {
        headers: {
          'x-api-key': '',
        },
        params: {
          owner: accountAddress,
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
