import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react"
import { Box, Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react';

export default function Cartpage() {
    const [newData, setData] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:5000/cart/view-cart").then((res) => {
            console.log(res)
            setData(res.data.cartItems)
            setCart(res.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const handleIncreaseQuantity = () => {
       
         setQuantity((prev) => prev + 1)
    };

    const handleDecreaseQuantity = () => {
      
         setQuantity(prev => prev - 1)
    };

    const handleRemoveFromCart = (cartItemId) => {
        axios.delete(`http://localhost:5000/cart/remove-from-cart/${cartItemId}`).then(() => {
            getData()
        });
    };

    useEffect(() => {
        let totalCount = 0;
        newData.forEach((item) => {
            totalCount += item.price * item.quantity
        })
        setTotal(totalCount)

    }, [cart])


    console.log(newData)
    return (<div>
        <Box columns={4} >
            <Text>
                {newData?.map((item) => {
                    return (
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    width={300}
                                    height={350}
                                    src={item.image}
                                    alt='Product Image'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.title}</Heading>
                                    <Heading size='sm'>Category: {item.category}</Heading>

                                    <Text color='blue.600' fontSize='2xl'>
                                        ${item.price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button onClick={() => handleRemoveFromCart(item._id)} variant='solid' colorScheme='blue'>
                                        Remove
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup spacing='2'>
                                    <Button isDisabled={quantity === 1} onClick={() => handleDecreaseQuantity(item._id)} variant='solid' colorScheme='yellow'>
                                        -
                                    </Button>
                                    <Button variant='solid' colorScheme='yellow'>
                                        {quantity}
                                    </Button>
                                    <Button onClick={() => handleIncreaseQuantity(item._id)} variant='solid' colorScheme='yellow'>
                                        +
                                    </Button>

                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                })}
            </Text>

        </Box>
        <Box>
             <h1>Total Count</h1> 
             {55.99} 
        </Box>
    </div>

    )
}
