import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";

const Input = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const currencies = useCurrencyInfo(from);

  // Convert
  const convert = () => {
    const rate = currencies[to] || 0;
    setConverted(amount * rate);
  };

  //swap
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="relative bg-white/20 backdrop-blur-md w-[40%] p-5 rounded-xl flex flex-col items-center">
        

        {/* from and sections or input the value */}
        <div className="flex justify-between items-center p-5 w-full bg-white text-black rounded-lg mb-3">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="outline-none text-lg w-25 mt-2"
            />
          </div>

          {/*  select the currency */}
          <div>
            <p className="text-sm text-gray-500">Currency</p>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-gray-200 p-1 mt-2 rounded-md outline-none"
            >
              {Object.keys(currencies).length > 0 ? (
                Object.keys(currencies).map((cur) => (
                  <option key={cur} value={cur}>
                    {cur.toUpperCase()}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>
        </div>

        {/* SWAP */}
        <button
          onClick={swap}
          className="absolute bg-blue-500 text-white px-4 py-1 rounded-md mt-23 z-10"
        >
          Swap
        </button>


        {/* to and display the converted value */}
        <div className="flex justify-between items-center p-5 w-full bg-white text-black rounded-lg">
          <div>
            <p className="text-sm text-gray-500">To</p>
            <input
              type="number"
              value={converted}
              readOnly
              className="outline-none text-lg w-25"
            />
          </div>


          <div>
            <p className="text-sm text-gray-500">Currency</p>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-gray-200 p-1 rounded-md outline-none"
            >
              {Object.keys(currencies).length > 0 ? (
                Object.keys(currencies).map((cur) => (
                  <option key={cur} value={cur}>
                    {cur.toUpperCase()}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>
        </div>


        <button
          onClick={convert}
          className="bg-blue-600 w-full py-3 rounded-lg text-white font-semibold mt-5"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Input;
