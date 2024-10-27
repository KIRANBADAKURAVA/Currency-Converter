import './App.css';
import Input from './Components/Input';
import { useEffect, useState } from 'react';
import CurrencyData from './Hooks/CurrencyData';

function App() {
  const [option, setOption] = useState([]);
  const [to, setTo] = useState('USD');
  const [from, setFrom] = useState('USD');
  const [amount, setAmount] = useState(); // Set default value
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = CurrencyData(from);

  useEffect(() => {
    if (currencyInfo) {
      setOption(Object.keys(currencyInfo));
    }
  }, [currencyInfo]);

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, to, from]); 


  function handleSubmit(e) {
    e.preventDefault();
 
  }
  function Swap(){
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2 bg-green-500 rounded-md p-4">
      <h1>Currency Converter</h1>
        <form onSubmit={handleSubmit}>
          {/* Input for "from" currency */}
          <Input
            label='From'
            amount={amount}
            currencyoptions={option}
            onCurrencychange={(currency) => setFrom(currency)} 
            onamountchange={(amount) => setAmount(amount)}
          />
         
          {/* Input for "to" currency */}

          <Input
            label='To'
            amount={convertedAmount}
            currencyoptions={option}
            onCurrencychange={(currency) => setTo(currency)}
            onamountchange={(amount) => setConvertedAmount(amount)}
            inputdisabled={true}
          />
          <button 
          className="mt-4 p-2 bg-blue-500 text-white rounded"
          onClick={()=>(Swap())}
          >
          Swap
          </button>
        </form> 
      </div>
    </div>
  );
}

export default App;
