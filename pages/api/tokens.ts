// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  tokens: Token[];
};

type Error = {
  message: string;
};

interface Token {
  to: string;
  timestamp: string;
  hash: string;
}

// Filter tokens to ensure they are in the account
const filterTokens = (tokens: Token[], accountAddress: string): Token[] => {
  const filtered: Token[] = [];

  // loop through all tokens
  tokens.forEach((token: Token) => {
    // check if 'to' equals wallet address
    if (token.to === accountAddress) {
      filtered.push(token);
    }

    // TODO check for dupes

    return new Set(filtered);
  });

  return filtered;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== 'POST') {
    res.status(405).json({
      // type: 'INVALID_METHOD',
      message: 'Only POST requests allowed',
      // success: false,
    });
    return;
  }

  const { accountAddress } = req.body;

  const { data } = await axios.get(
    `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${accountAddress}&tag=latest&apiKey=${process.env.ETHERSCAN_KEY}`
  );

  return res.status(200).json({
    tokens: filterTokens(data.result, accountAddress),
  });
}
