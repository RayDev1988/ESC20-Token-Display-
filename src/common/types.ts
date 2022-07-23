
export interface IBalance {
  contractAddress: String,
  balance: Number,
  symbol: String,
}

export interface IModal {
  findBalances: () => void;
  setShow: (show: boolean) => void;
  show: boolean;
  setAddress: (address: string) => void;
}