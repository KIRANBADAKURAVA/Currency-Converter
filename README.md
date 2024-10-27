# Currency Converter

This project is a simple **Currency Converter** application built using **React.js**. It allows users to convert amounts between different currencies based on the latest exchange rates. The exchange rates are fetched dynamically, and users can select the source and target currencies to perform conversions.

## Features

- **Convert Currencies**: Select a base currency ("From") and a target currency ("To") to convert a specific amount.
- **Real-time Rates**: Conversion is done using real-time exchange rates fetched from an external API.
- **Disabled Input**: The "To" input field is disabled, showing the converted amount based on the selected currencies and the input amount.
- **Dynamic Options**: The currency options are dynamically loaded based on the API data.

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Hooks**: React hooks like `useState`, `useEffect` to manage state and side effects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Custom Hook (CurrencyData)**: A custom hook to fetch and manage currency data.

## Project Structure

```plaintext
.
├── public
├── src
│   ├── Components
│   │   └── Input.jsx        # Reusable Input component for currency selection and amount input
│   ├── Hooks
│   │   └── CurrencyData.js  # Custom hook to fetch exchange rates data
│   ├── App.jsx              # Main application component
│   ├── App.css              # Styling file using Tailwind CSS
│   └── index.js             # Entry point of the application
├── package.json
└── README.md
