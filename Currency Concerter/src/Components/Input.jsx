import React, { useId } from "react";

export default function Input({
    label,
    amount,
    currencyoptions,
    onCurrencychange,
    onamountchange,
    inputdisabled = false,
}) {
    const id = useId();

    return (
        <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor={id} className="text-gray-700 font-semibold">
                    {label}
                </label>
                <label className="text-gray-500">Currency</label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <input
                    id={id}
                    type="number"
                    name={label}
                    placeholder="Amount"
                    value={amount}
                    disabled={inputdisabled}
                    min="0"
                    onChange={(e) => onamountchange(Number(e.target.value))}
                    className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
                />
                <select
                    value={currencyoptions.includes(amount) ? amount : currencyoptions[0]}
                    onChange={(e) => onCurrencychange(e.target.value)}
                    className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
