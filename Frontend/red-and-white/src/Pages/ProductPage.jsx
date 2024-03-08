import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { SimpleGrid, Button, ButtonGroup } from '@chakra-ui/react';
import Cartpage from './Cartpage';

export default function ProductPage() {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [cart, setCart] = useState([])

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

    //cart page logic

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
            const updateCart = cart.map((item) => {

                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            setCart(updateCart)
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
            alert("Product added to cart")
        }
    }
    console.log(cart,"cart")

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
                {data.map(item => <ProductList key={item.id} {...item} addToCart={addToCart}  />)}
            </SimpleGrid>

            {/* {cart?.map(item =>  <Cartpage key={item.id} title={item.title}   />)} */}
            <Cartpage cart={cart} />

            <SimpleGrid columns={4} spacing={10}>
               
            </SimpleGrid>
        </div>
    );
}
