import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Bookshelf from '../components/Bookshelf';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    

    return (
        <Box p="4">
            <Bookshelf books={books} />
        </Box>
    );
};

export default Home;
