import React, { useState, useEffect } from 'react';
import ShowLoader from './loader';

export default function GetQuotes(props) {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=10');
        const quotes = await res.json();
        setQuotes([quotes.quotes]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <ShowLoader />;
  if (quotes.length === 0) {
    return (
    <p>no quotes :P</p>
    );
  }

  return (
    <div>
      <p>Here are 10 random quotes!</p>
      <ul>{
        quotes[0].map((quote, index) => (
          <li className="each-quote" key={index}>
            {quote.text}
            <br />
            - {quote.author}
          </li>
        ))
        }
      </ul>
    </div>
  );
}
