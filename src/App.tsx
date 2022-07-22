import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header"
import TokenDetails from "./components/TokenDetails";
import { fetchTokenBalances } from "./utils";
import DarkMode from "./DarkMode";

function App() {

  const [balances, setBalances] = useState([]);
  const [address, setAddress] = useState("");

  const fetchBalances = async (address) => {
    const data = await fetchTokenBalances(address);
    setBalances(data);
  }
  
  const changeAddress = (address) => {
    setAddress(address);
  }

  const findTokenBlanace = () => {
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
