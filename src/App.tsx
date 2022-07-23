import { useEffect, useState } from "react";
import "./App.css";
import { IBalance } from "./common/types";
import Header from "./components/header"
import TokenDetails from "./components/TokenDetails";
import { fetchTokenBalances } from "./utils";

function App() {

  const [balances, setBalances] = useState<IBalance[]>([] as IBalance[]);
  const [address, setAddress] = useState("");
  const [timerId, setTimerId] = useState(-1);

  useEffect(() => {
    const storageItem = localStorage.getItem("address");
    if(storageItem) {
      setAddress(storageItem);
      fetchBalances(storageItem);
      fetchByTime(storageItem);
    }
  }, []);

  const fetchByTime = (address: string) => {
    if(timerId !== -1) {
      window.clearInterval(timerId);
    }
    const tid = window.setInterval(fetchBalances, 20000, address);
    setTimerId(tid);
  }

  const fetchBalances = async (address: string) => {
    const data: IBalance[] = await fetchTokenBalances(address);
    setBalances(data);
  }
  
  const changeAddress = (address: string) => {
    setAddress(address);
  }

  const findTokenBlanace = () => {
    localStorage.setItem("address", address);
    fetchByTime(address);
    fetchBalances(address);
  }

  return (
    <div className="App container mt-5" style={{width: "100%"}}>
      <Header
        setAddress={changeAddress}
        findBalances={findTokenBlanace}
      />
      <TokenDetails details={balances}/>
    </div>
  );
}

export default App;
