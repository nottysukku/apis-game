import React, { useState, useEffect } from "react";
import axios from "axios";

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
        },
      })
      .then((response) => {
        setCryptoData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Cryptocurrency Prices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cryptoData.map((crypto) => (
            <li key={crypto.id}>
              {crypto.name}: ${crypto.current_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Crypto;
