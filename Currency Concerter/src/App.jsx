import './App.css';
import Input from './Components/Input';
import { useEffect, useState } from 'react';
import CurrencyData from './Hooks/CurrencyData';

function App() {
  const [option, setOption] = useState([]);
  const [to, setTo] = useState('USD');
  const [from, setFrom] = useState('USD');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = CurrencyData(from);

  useEffect(() => {
    if (currencyInfo) {
      setOption(Object.keys(currencyInfo));
    }
  }, [currencyInfo]);

  useEffect(() => {
    if (currencyInfo && currencyInfo[to] && amount) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [amount, to, from, currencyInfo]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function Swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Currency Converter
      </h1>
      
      <div className="w-1/2 bg-green-500 rounded-md p-4 shadow-lg">
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
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            onClick={() => Swap()}
          >
            Swap
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
