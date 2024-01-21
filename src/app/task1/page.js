"use client";
import { useEffect, useState } from "react";
import Web3 from "web3";
import "./page.css";

export default function Page() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      if (typeof ethereum === "undefined") {
        throw new Error("MetaMask not detected. Please install MetaMask.");
      }

      await ethereum.enable();
      const web3 = new Web3(ethereum);
      var accounts = await web3.eth.getAccounts();

      const balanceInWei = await web3.eth.getBalance(accounts[0]);
      const balanceInEth = web3.utils.fromWei(balanceInWei, "ether");

      setWallet(accounts[0]);
      setBalance(balanceInEth);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="container mb">
      <h1>Wallet Address: {wallet}</h1>
      <h1>
        Wallet balance: {balance ? `${balance} ETH` : ""}
      </h1>
    </div>
  );
}
