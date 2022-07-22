import axios from "axios"

const apiKey = 'ke5YtLgRcQeJzCCer3-KOA17LtI6PcyS';
const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

export const fetchTokenBalances = async (address: string) => {

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "alchemy_getTokenBalances",
    "headers": {
      "Content-Type": "application/json"
    },
    "params": [
      `${address}`,
      "DEFAULT_TOKENS",
    ],
    "id": 42
  });

  const config = {
    method: 'post',
    url: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  // Make the request and print the formatted response:
  const response = await axios(config);
  const balances = response['data']['result'];
  const nonZeroBalances =
    balances['tokenBalances'].filter(token => {
      return token['tokenBalance'] !== '0'
    });

  const rlt = await Promise.all(nonZeroBalances.map(token => fetchTokenTypes(token)));
  return rlt.filter(token => token['symbol'] === 'USDT' || token['symbol'] === 'DAI' || token['symbol'] === 'LINK' );
}

const fetchTokenTypes = async (token) => {
  let balance = token['tokenBalance']
  const contractAddress = token['contractAddress'];
  let individual = {};
  individual['contractAddress'] = contractAddress;

  let metadataParams = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "alchemy_getTokenMetadata",
    "params": [
      contractAddress
    ],
    "id": 42
  });

  let metadataConfig = {
    method: 'post',
    url: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    data: metadataParams
  };

  // Get metadata of token
  const res = await axios(metadataConfig);
  const metadata = res.data.result;
  
  balance = balance / Math.pow(10, metadata['decimals']);
  balance = balance.toFixed(2);
  individual['symbol'] = metadata['symbol'];
  individual['balance'] = balance;
  return individual;
}