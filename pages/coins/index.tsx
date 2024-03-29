/** @format */

import Navbar from "@/components/Navbar";
import Axios from "axios";
import styles from "@/styles/Coin.module.css";

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

const CoinList = ({ coinData }: CoinProp) => {
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

// getServerSideProps
// getStaticProps

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;

// https://pokeapi.co/api/v2/pokemon?limit=9
