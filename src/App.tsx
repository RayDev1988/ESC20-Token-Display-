import { useEffect, useState } from 'react';
import './App.css';
import { IBalance } from './common/types';
import Header from './components/header';
import TokenDetails from './components/TokenDetails';
import { fetchTokenBalances } from './utils';

function App() {
  const [balances, setBalances] = useState<IBalance[]>([] as IBalance[]);
  const [timerId, setTimerId] = useState(-1);

  useEffect(() => {
    const storageItem = localStorage.getItem('address');
    if (storageItem) {
      fetchBalances(storageItem);
      fetchByTime(storageItem);
    }
  }, []);

  const fetchByTime = (address: string): void => {
    if (timerId !== -1) {
      window.clearInterval(timerId);
    }
    const tid = window.setInterval(fetchBalances, 20000, address);
    setTimerId(tid);
  };

  const fetchBalances = async (address: string): Promise<void> => {
    const data: IBalance[] = await fetchTokenBalances(address);
    setBalances(data);
  };

  const findTokenBlanace = (address: string): void => {
    localStorage.setItem('address', address);
    fetchByTime(address);
    fetchBalances(address);
  };

  return (
    <div className="App container mt-5" style={{ width: '100%' }}>
      <Header findBalances={findTokenBlanace} />
      <TokenDetails details={balances} />
    </div>
  );
}

export default App;
