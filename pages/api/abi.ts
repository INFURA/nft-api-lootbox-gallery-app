import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Only POST requests allowed',
    });
    return;
  }

  const { contractAddress } = req.body;

  const { data } = await axios.get(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${process.env.ETHERSCAN_KEY}`);

  return res.status(200).json({
    abi: data.result
  });
}