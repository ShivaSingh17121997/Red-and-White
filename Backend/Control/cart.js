const Cart = require("../models/cart");
const express = require("express");
const cartroute = express.Router();

// Add a product to the cart
cartroute.post("/add-to-cart", async (req, res) => {
    try {
        const cartItem = new Cart(req.body);
        await cartItem.save();
        res.json({ message: 'Product added to the cart' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


cartroute.get('/view-cart', async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json({ cartItems });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update the quantity 
cartroute.patch("/update/:cartItemId", async (req, res) => {
    try {
        const { cartItemId } = req.params;
        const updatedCartItem = await Cart.findByIdAndUpdate(cartItemId, req.body, { new: true });
        if (updatedCartItem) {
            res.status(200).json({ msg: "Product edited successfully!" });
        } else {
            res.status(404).json({ msg: "Product not found!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Decrease the quantity
cartroute.patch("/decrease-quantity/:cartItemId", async (req, res) => {
    try {
        const { cartItemId } = req.params;
        await Cart.findByIdAndUpdate(cartItemId, { $inc: { quantity: -1 } });
        res.json({ message: 'Quantity decreased successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Remove a product 
cartroute.delete("/remove-from-cart/:cartItemId", async (req, res) => {
    try {
        const { cartItemId } = req.params;
        await Cart.findByIdAndDelete(cartItemId);
        res.json({ message: 'Product removed from the cart successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = {
    cartroute,
};
