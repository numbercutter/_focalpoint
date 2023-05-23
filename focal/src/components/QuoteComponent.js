// src/components/QuoteComponent.js
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

const QuoteComponent = ({ quote }) => {
  return (
    <LinkBox maxW="sm" mx="auto" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
      <Box p="6">
        <Text fontSize="xl" textAlign="center">
          "{quote.text}"
        </Text>
        <Text mt="4" color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textAlign="center">
          {quote.author} &bull; {quote.source}
        </Text>
      </Box>
      <LinkOverlay href={quote.link} isExternal>
        Read More
      </LinkOverlay>
    </LinkBox>
  );
}

export default QuoteComponent;
