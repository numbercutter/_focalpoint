// src/pages/index.js
import { useEffect, useState } from 'react';
import { Flex, VStack, Spinner } from '@chakra-ui/react';
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
    <VStack spacing={8}>
      {quotes.map(quote => (
        <Flex key={quote.id} justifyContent="center" alignItems="center" width="100%">
          <QuoteComponent quote={quote} />
        </Flex>
      ))}
    </VStack>
  );
}
