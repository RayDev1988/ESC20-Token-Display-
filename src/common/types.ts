export interface IBalance {
  contractAddress: string;
  balance: number;
  symbol: string;
}

export interface IModal {
  findBalances: (address: string) => void;
  setShow: (show: boolean) => void;
  show: boolean;
}

export interface IToken {
  contractAddress: string;
  error: string | null;
  tokenBalance: number;
}
