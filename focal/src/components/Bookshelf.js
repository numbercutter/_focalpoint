import { Box, Grid, Text, Image, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';

const Bookshelf = ({ books }) => {
    return (
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
            {books.map((book, i) => (
                <Box as="a" w="100%" p="4" rounded="md" boxShadow="lg" overflow="hidden">
                    <Link href={book.file} key={i} passHref>
                        <Box bg="brand.200" color="brand.300" p="2" rounded="md" border="2px" borderColor="brand.100">
                            <AspectRatio ratio={5.5 / 8.5} maxH="800px">
                                <Image src={book.cover} alt={book.title} objectFit="contain" />
                            </AspectRatio>
                            <Text mt="2" color="black">{book.title}</Text>
                        </Box>
                    </Link>
                </Box>
            ))}
        </Grid>
    );
};

export default Bookshelf;
