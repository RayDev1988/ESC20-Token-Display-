export interface IBalance {
  contractAddress: string;
  balance: number;
  symbol: string;
}

export interface IModal {
  findBalances: () => void;
  setShow: (show: boolean) => void;
  show: boolean;
  setAddress: (address: string) => void;
}

export interface IToken {
  contractAddress: string;
  error: string | null;
  tokenBalance: number;
}
