import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Spin, Alert } from 'antd';

const CurrencyConverterPage = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
        setExchangeRates(data.rates);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch exchange rates.');
        setLoading(false);
      });
  }, []);

  const convertCurrency = () => {
    if (amount && exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <div className="currency-converter-page fade-in">
      <h1 style={{ color: "#FFEBEE" }}>Currency Converter</h1>
      {loading && <Spin size="large" />}
      {error && <Alert message={error} type="error" showIcon />}
      {!loading && !error && (
        <>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{ marginBottom: 10 }}
          />
          <div>
            <Select
              value={fromCurrency}
              onChange={setFromCurrency}
              style={{ width: 150, marginRight: 10 }}
            >
              {currencies.map(currency => (
                <Select.Option key={currency} value={currency}>{currency}</Select.Option>
              ))}
            </Select>
            <Select
              value={toCurrency}
              onChange={setToCurrency}
              style={{ width: 150 }}
            >
              {currencies.map(currency => (
                <Select.Option key={currency} value={currency}>{currency}</Select.Option>
              ))}
            </Select>
          </div>
          <Button onClick={convertCurrency} type="primary" style={{ marginTop: 10 }}>
            Convert
          </Button>
          {convertedAmount !== null && (
            <h2>Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}</h2>
          )}
        </>
      )}
    </div>
  );
};

export default CurrencyConverterPage;