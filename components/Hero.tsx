"use client"; // Mark this file as a client component

import Head from "next/head";
import styles from "../app/home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }
  }, []);

  const connectAccount = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Connect MetaMask</title>
        <meta name="description" content="MetaMask connection demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className={styles.connect} onClick={connectAccount}>
        {account
          ? `${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>

      <Hero connectAccount={connectAccount} account={account} />
    </div>
  );
}

type HeroProps = {
  connectAccount: () => void;
  account: string | null;
};

const Hero: React.FC<HeroProps> = ({ connectAccount, account }) => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Discover Kashmir Camp's charm.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Experience the beauty of nature with our app, guiding your adventures
          around the world.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <button
            className={styles.connect}
            onClick={connectAccount}
            style={{
              padding: "10px 30px",
              fontSize: "16px",
              width: "250px",
              textAlign: "center",
            }}
          >
            {account
              ? `${account.slice(0, 6)}...${account.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">Location</p>
            <p className="bold-20 text-white">Mount Everest</p>
          </div>
          <div className="flexBetween">
            <div>
              <p className="regular-16 text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div>
              <p className="regular-16 text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
