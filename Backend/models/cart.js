const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    category: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: Number,
    oldPrice: Number,
    rating: Number,
    inStock: Number,
    image: String

    // // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    // quantity: { type: Number, default: 1 }

}, {
    versionKey: false
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;