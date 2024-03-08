import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { SimpleGrid, Button, ButtonGroup } from '@chakra-ui/react';

export default function ProductPage() {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setOriginalData(data);
            });
    }, []);

    const filterProducts = (category) => {
        const filteredData = originalData.filter(item => item.category === category);
        setData(filteredData);
    };

    const resetProducts = () => {
        setData(originalData);
    };

    return (
        <div>
            <div>
                <ButtonGroup>
                    <Button onClick={() => filterProducts("electronics")} colorScheme='blue'>Electronics</Button>
                    <Button onClick={() => filterProducts("jewelery")} colorScheme='blue'>Jewelery</Button>
                    <Button onClick={() => filterProducts("men's clothing")} colorScheme='blue'>Men's clothing</Button>
                    <Button onClick={() => filterProducts("women's clothing")} colorScheme='blue'>Women's clothing</Button>
                    <Button onClick={resetProducts} colorScheme='blue'>Reset</Button>
                </ButtonGroup>
            </div>

            <SimpleGrid columns={4} spacing={10}>
                {data.map(item => <ProductList key={item.id} {...item} />)}
            </SimpleGrid>
        </div>
    );
}
