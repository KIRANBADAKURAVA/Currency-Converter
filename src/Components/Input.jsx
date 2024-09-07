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
        <div className="m-3 h-auto bg-white rounded-md">
            <div className="m-1 flex flex-wrap justify-between">
                <label htmlFor={id} className="m-1">{label}</label>
                <label className="m-1 ">Currency</label>
            </div>
            <br />
            <div className="m-1 flex flex-wrap justify-between">
                <input
                    id={id}
                    type="number"
                    name={label}
                    placeholder="Amount"
                    value={amount}
                    disabled={inputdisabled}
                    onChange={(e) => onamountchange(Number(e.target.value))}
                />
                <select onChange={(e) => onCurrencychange(e.target.value)}>
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
