// src/pages/index.js
import { useEffect, useState } from 'react';
import { Grid, Spinner } from '@chakra-ui/react';
import QuoteComponent from '../components/QuoteComponent';

export default function HomePage() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quotes')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={6}
      p={6} // padding
    >
      {quotes.map(quote => (
        <QuoteComponent key={quote.id} quote={quote} />
      ))}
    </Grid>
  );
}
