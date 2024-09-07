import { useEffect, useState } from "react";

function CurrencyData(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
   
    fetch(`https://v6.exchangerate-api.com/v6/24c3458ee4348d6bfbab23c8/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log("Fetched data:", data);
        setData(data["conversion_rates"]);
      })
      .catch((error) => {
        console.log(`Failed to fetch data: ${error}`);
      });
  }, [currency]);

 //console.log(data);
 
  return data;
}

export default CurrencyData;
