import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => setCurrencies(res[currency] || {})) 
            .catch(() => setCurrencies({})); 
    }, [currency]);

    return currencies;
}

export default useCurrencyInfo;