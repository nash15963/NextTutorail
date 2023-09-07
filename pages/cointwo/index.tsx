/** @format */

import Navbar from "@/components/Navbar";
import Axios from "axios";
import styles from "@/styles/Coin.module.css";
import { useEffect, useState } from "react";

interface CoinProp {
  coinData: {
    coins: coin[];
  };
}

interface coin {
  name: string;
  icon: string;
  price: number;
}

const CoinClient = () => {
    const [coinData, setCoinData] = useState({ coins: [] });

    useEffect(()=>{
        const getData = async () => {
            const data = await Axios.get(
                "https://api.coinstats.app/public/v1/coins?skip=0"
            );
            setCoinData(data.data);
        }
        getData()
    },[])

  return (
    <div>
      <Navbar />
      <div className={styles.box}>
        {coinData.coins.map((coin: coin, idx:number) => {
          return (
            <div className={styles.inner_box} key={`${coin}${idx}`}>
              <h4> name :{coin.name}</h4>
              <img style={{ width:"50px", height:"50px" }} src={coin.icon} alt={coin.name} />
              <p> price :{coin.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default CoinClient;

// https://pokeapi.co/api/v2/pokemon?limit=9
