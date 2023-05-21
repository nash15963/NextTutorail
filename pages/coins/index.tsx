import Axios from "axios";

interface CoinProp {
    coinData:{
        coins : coin[]
    }
}
interface coin {
    name: string;
    icon: string;
    price: number;
}

const CoinList = ({ coinData }:CoinProp) => {
  return (
    <div>
      {coinData.coins.map((coin:coin) => {
        return (
          <div>
            <h1> name :{coin.name}</h1>
            <img src={coin.icon} />
            <p> price :{coin.price}</p>
          </div>
        );
      })}
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