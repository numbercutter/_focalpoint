import { Box, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Bookshelf = ({ books }) => {
    return (
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6}>
            {books.map((book, i) => (
                <Link href={book.file} key={i}>
                    <Box w="100%" h="200" bg="blue.500" color="white" p="4" rounded="md">
                        <Text>{book.title}</Text>
                    </Box>
                </Link>
            ))}
        </Grid>
    );
};

export default Bookshelf;
