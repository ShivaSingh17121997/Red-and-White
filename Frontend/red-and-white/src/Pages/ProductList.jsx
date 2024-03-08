import React from 'react';
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react';
import axios from "axios"
export default function ProductList({ id, image, category, title, description, price, addToCart }) {

    const limitDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 10) {
            return words.slice(0, 10).join(' ') + '...';
        }
        return description;
    };

    const handleAddToCart = () => {
        const product = {
            id: id,
            image: image,
            category: category,
            title: title,
            description: description,
            price: price
        };
        // addToCart(product);
        axios.post(`http://localhost:5000/cart/add-to-cart`,product).then((res)=>{
            alert("Data is stored in Cart!")
            console.log(res,"res")
        }).catch((error)=>{
            console.log(error.message)
        })
    };

    return (
        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        width={300}
                        height={350}
                        src={image}
                        alt='Product Image'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Heading size='sm'>Category: {category}</Heading>
                        <Text maxLength={20}>
                            {category}
                            {limitDescription(description)}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button onClick={handleAddToCart} variant='solid' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
}
