import React, { useState, useEffect } from 'react';
// import React from 'react';

export default function GetQuotes() {
  const [quotes, setQuotes] = useState([]);
  // const { isLoading, setIsLoading } = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://type.fit/api/quotes');
        const quotes = await res.json();
        setQuotes([quotes[0]]);
        // console.log(quotes);
        // setIsLoading(false);
      } catch (err) {
        console.error(err);
        // setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  // console.log(quotes[0].text);

  if (quotes.length === 0) return null;
  const firstQuote = quotes[0].text;
  // console.log(quotes[0].text);

  return (
    <div>
      <p>Get a Quote!</p>
      {/* <button onClick={getQuotesData}>Get Quote</button> */}
      <p>{firstQuote}</p>
    </div>
  );
}
